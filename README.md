# Zoom Clone

This project is a Zoom clone built using Next.js, TypeScript, Clerk, getstream, Shadcn, and Tailwind CSS. It provides a platform for hosting meetings with various features including authentication, meeting controls, scheduling, recording, and more. Follow the instructions below to set up the project locally on your machine.

## Prerequisites

Make sure you have the following installed on your machine:

- Git
- Node.js
- npm (Node Package Manager)

## Cloning the Repository

Clone the repository to your local machine:

## Installation

Install the project dependencies using npm:


## Set Up Environment Variables

Create a new file named `.env` in the root of your project and add the following content:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<YOUR_CLERK_PUBLISHABLE_KEY>
CLERK_SECRET_KEY=<YOUR_CLERK_SECRET_KEY>

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=<YOUR_STREAM_API_KEY>
STREAM_SECRET_KEY=<YOUR_STREAM_SECRET_KEY>


Replace the placeholder values with your actual Clerk and getstream credentials. You can obtain these credentials by signing up on the Clerk website and getstream website.

## Running the Project

Start the development server:

npm run dev


Open http://localhost:3000 in your browser to view the project.

## Features

- **Authentication:** Implements authentication and authorization features using Clerk.
- **New Meeting:** Quickly start a new meeting with configurable camera and microphone settings.
- **Meeting Controls:** Participants have full control over meeting aspects including recording, reactions, screen sharing, muting/unmuting, etc.
- **Schedule Future Meetings:** Input meeting details to schedule future meetings.
- **Past Meetings List:** Access a list of previously held meetings.
- **View Recorded Meetings:** Access recordings of past meetings.
- **Personal Room:** Users have a personal room with a unique meeting link.
- **Join Meetings via Link:** Easily join meetings created by others.
- **Secure Real-time Functionality:** All interactions within the platform are secure and in real-time.
- **Responsive Design:** Optimized user experience across devices with responsive design principles.

## Quick Start

Follow these steps to set up the project locally on your machine:

1. Clone the repository.
2. Install dependencies with `npm install`.
3. Set up environment variables in a `.env` file.
4. Run the project with `npm run dev`.

Feel free to explore the code architecture and reusability within the project. Enjoy your Zoom clone experience! 🚀
