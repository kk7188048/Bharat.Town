# Bharat.Town

An open source alternative to Gather.town

# Project Name
================

## Table of Contents
-----------------

* [Key Features](#key-features)
* [User Authentication](#user-authentication)
* [Avatar Creation](#avatar-creation)
* [Virtual Space](#virtual-space)
* [Proximity-Based Video/Audio](#proximity-based-videoaudio)
* [Interaction with Objects](#interaction-with-objects)
* [Private Areas](#private-areas)
* [Chat Functionality](#chat-functionality)

## Key Features
---------------

### User Authentication 
--for now this auth is neglected one can join directly

* Allow users to create accounts and log in.
* Store user data (avatar, settings) in the database.

### Avatar Creation

* Provide a customizable avatar builder for users to create their in-game representation.
* Store avatar data in the database for each user.

### Virtual Space

* Create a 2D map using Tailwind CSS and Next.js components.
* Implement keyboard controls for avatar movement (WASD or arrow keys).

### Proximity-Based Video/Audio

* Use Socket.IO to establish real-time connections between users.
* Implement video/audio functionality that activates when users are close to each other.

### Interaction with Objects

* Allow users to interact with specific objects on the map (e.g., clicking on a screen to view content).
* Implement functionality to display content (images, videos, documents) when interacting with objects.

### Private Areas

* Designate certain areas on the map as private spaces.
* Implement access control to restrict entry to private areas.

### Chat Functionality

* Provide a chat interface for users to communicate with each other.
* Use Socket.IO to send and receive chat messages in real-time.

## Getting Started
---------------

* Clone the repository: `git clone https://github.com/your-username/your-repo-name.git`
* Install dependencies: `npm install`
* Start the development server: `npm start`

## Contributing
------------

* Fork the repository: `git fork https://github.com/your-username/your-repo-name.git`
* Create a new branch: `git checkout -b your-branch-name`
* Make changes and commit: `git commit -m "your commit message"`
* Push changes: `git push origin your-branch-name`
* Create a pull request: `https://github.com/your-username/your-repo-name/pulls`

## License
-------

* This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Getting Started

Here for now there is not authorization

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
