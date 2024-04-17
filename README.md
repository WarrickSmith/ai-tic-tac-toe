### AI Tic-Tac-Toe Project

This is a classic game of Tic-Tac-Toe where two players can play against each other. The game is built with a modern interface and integrates with the Gemini API to provide a unique gaming experience.

### Technologies Used

- **Frontend**: React for building user interfaces, Vite as the build tool and development server
- **Styling**: CSS and Styled Components for component-based styling
- **API**: Gemini API for real-time data processing via my custom API Server Backend Project
- **Package Management**: npm for managing project dependencies
- **Version Control**: Git for tracking changes and collaborative development

### Leveraging Gemini API

The project uses the Gemini API to play as an AI opponent 'O'.

The AI is passed:

- **A representation of the current game board**
- **Instructions and an example of how the AI response should be structured**
- **Additional instructions to set context and reduce move errors**

### Installation and Local Development

Follow these steps to install and run the project in your local development environment:

1. Clone the repository:

   ```bash
   git clone https://github.com/WarrickSmith/tic-tac-toe.git

   cd tic-tac-toe
   ```

2. Install dependancies:

   ```bash
   npm install
   ```

3. Run the project:

   ```bash
   npm start
   ```

   This will start the server on http://localhost:3003.

4. Open your browser and navigate to http://localhost:3003 to play the game.

5. Configure Gemini API
   Unfortunately, I am not sharing the URl for my API server. You can start the project for example purposes but that's as far as it goes unless you create your own API interface.
   The payload would need to look like this:

   ```bash
   {
       model: 'gemini-pro',
       prompt: 'Your text prompt with instructions',
       stream: false,
   }
   ```
