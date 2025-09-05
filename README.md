# Atheendre Ramesh - 3D Portfolio

A stunning 3D interactive portfolio website showcasing my work as an AI/ML Engineer and Research Intern at IIT Tirupati. Built with Three.js and inspired by Bruno Simon's folio-2019, this portfolio features an immersive 3D environment where visitors can explore my 32 GitHub repositories, research work, and professional achievements.

## 🚀 Live Demo

Visit the live website: [https://atheendre130505.github.io/](https://atheendre130505.github.io/)

## ✨ Features

- **3D Interactive Environment**: Drive around in a 3D car to explore different project areas
- **Immersive Experience**: Physics-based interactions with objects and environments
- **Project Showcase**: 8 different project categories with detailed information
- **Responsive Design**: Works across all devices and screen sizes
- **Modern Web Technologies**: Built with Three.js, Vite, and modern JavaScript
- **Performance Optimized**: Smooth 60fps animations and interactions

## 🎯 Featured Projects

1. **AI-Powered Loan Eligibility Engine** - Full-stack AWS cloud-native platform with Cohere LLM integration
2. **Autonomous AI Development CLI** - Enterprise-grade system using Gemini 2.5 Pro and Qwen3-Coder 80B
3. **Dueling Double DQN Dinojump** - Advanced reinforcement learning with prioritized experience replay
4. **Kaggle Introvert-Extrovert (97.5%)** - Ensemble classification models achieving 97%+ accuracy
5. **GANs Monet - Style Transfer** - Deep learning project transforming photos into Monet-style paintings
6. **Billions - Freelance Project** - Production-scale full-stack solution for client success
7. **Hinton-Hopfield Networks Research** - Cutting-edge research at IIT Tirupati on neural networks
8. **IIT Tirupati Research** - Transformer architecture integration and associative memory models
9. **Salesforce Internship** - DevOps practices and CI/CD pipelines with 20% deployment time reduction

## 🛠️ Technologies Used

- **Three.js** - 3D graphics and WebGL rendering
- **Vite** - Fast build tool and development server
- **GSAP** - Animation library for smooth transitions
- **Cannon.js** - Physics engine for realistic interactions
- **Howler.js** - Audio management for sound effects
- **dat.GUI** - Debug interface for development

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/atheendre130505/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment.

## 🎮 How to Navigate

- **Mouse/Touch**: Look around the 3D environment
- **WASD Keys**: Drive the car forward, backward, and steer
- **Click on Project Areas**: Interact with project displays
- **Follow the Path**: Drive along the road to discover different sections

## 📁 Project Structure

```
src/
├── index.html              # Main HTML file
├── index.js               # Application entry point
├── javascript/
│   ├── Application.js     # Main application class
│   ├── World/            # 3D world components
│   │   ├── Sections/     # Different portfolio sections
│   │   └── ...
│   └── ...
├── style/
│   └── main.css          # Main stylesheet
└── shaders/              # GLSL shaders for effects
```

## 🎨 Customization

### Adding New Projects

1. Add project images to `static/models/projects/[project-name]/`
2. Update the project list in `src/javascript/World/Sections/ProjectsSection.js`
3. Add corresponding floor textures if needed

### Modifying the 3D World

- Edit `src/javascript/World/` files to modify the 3D environment
- Update materials in `src/javascript/Materials/`
- Modify shaders in `src/shaders/` for visual effects

## 🌐 Deployment

### GitHub Pages

1. Push your code to a GitHub repository
2. Go to repository Settings > Pages
3. Select "Deploy from a branch" and choose "main"
4. Your site will be available at `https://[username].github.io/[repository-name]`

### Other Hosting Platforms

The built files in the `dist/` directory can be deployed to any static hosting service:
- Netlify
- Vercel
- AWS S3
- Firebase Hosting

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (with reduced performance)

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

## 📄 License

This project is based on Bruno Simon's folio-2019 and is licensed under the MIT License.

## 👨‍💻 About Me

**Atheendre Ramesh**  
AI/ML Engineer & Research Intern at IIT Tirupati  
RV University, Bangalore | IIT Tirupati, India

- **Current Role**: Research Intern at IIT Tirupati (Jan 2024 - Present)
- **Education**: Computer Science (3rd year) at RV University, Bangalore
- **Research Focus**: Hinton-Hopfield Networks, Transformer Architecture Integration
- **Achievements**: 97%+ Kaggle accuracy, 32 GitHub repositories, Salesforce intern
- **Skills**: Python, PyTorch, TensorFlow, AWS, Reinforcement Learning, Deep Learning
- **Experience**: 20% deployment time reduction at Salesforce, 50% test score improvement teaching

## 🔗 Links

- **GitHub**: [@atheendre130505](https://github.com/atheendre130505)
- **Portfolio**: [https://atheendre130505.github.io/](https://atheendre130505.github.io/)
- **Email**: atheendre.ramesh@iittp.ac.in

---

*Built with ❤️ using Three.js and modern web technologies*
