import { NextRequest, NextResponse } from 'next/server'

// MailerLite API configuration
const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID // Optional: specific group/list ID

interface RegistrationData {
  name: string
  email: string
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: RegistrationData = await request.json()
    const { name, email } = body

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Imię i email są wymagane' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Nieprawidłowy format adresu email' },
        { status: 400 }
      )
    }

    // Check if API key is configured
    if (!MAILERLITE_API_KEY) {
      console.error('MAILERLITE_API_KEY is not configured')
      return NextResponse.json(
        { error: 'Konfiguracja serwera jest niepełna. Skontaktuj się z administratorem.' },
        { status: 500 }
      )
    }

    // Prepare MailerLite API request
    const mailerliteData = {
      email: email,
      fields: {
        name: name,
      },
      groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : [],
    }

    // Send request to MailerLite API
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${MAILERLITE_API_KEY}`,
        Accept: 'application/json',
      },
      body: JSON.stringify(mailerliteData),
    })

    const responseData = await response.json()

    // Handle MailerLite API response
    if (!response.ok) {
      console.error('MailerLite API error:', responseData)

      // Handle specific error cases
      if (response.status === 422) {
        // Validation error - subscriber might already exist
        return NextResponse.json(
          { error: 'Ten adres email jest już zarejestrowany na warsztat.' },
          { status: 422 }
        )
      }

      return NextResponse.json(
        { error: 'Wystąpił błąd podczas rejestracji. Spróbuj ponownie.' },
        { status: response.status }
      )
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        message: 'Dziękujemy za rejestrację! Sprawdź swoją skrzynkę email.',
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Registration error:', error)
    return NextResponse.json(
      { error: 'Wystąpił nieoczekiwany błąd. Spróbuj ponownie później.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Metoda GET nie jest obsługiwana' },
    { status: 405 }
  )
}
