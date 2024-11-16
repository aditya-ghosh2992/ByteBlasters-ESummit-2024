# ByteBlaster-ESummt-2024

#### A brief description of what this project does and who it's for
Our team has creat a website that is on "Creating a Web Based AI platform integrated with Machine Learning competent to help learners  in finding learning content easily"//(Link)

Our prototype is a personalized educational platform, designed to deliver tailored book and course recommendations using AI-driven tools, all accessible through a single website

The website also has to documentation,Github Repositories link with the depolyed **......** links for every course.

## Features

- Personalized User Profiles (Register/login)
- AI-Driven Book Recommendations
- AI-Powered Course Suggestions:
- Dynamic Adaptation:
- Integrated Search:
- Datasets: 


## 📢Introduction

- #### **Problem Statemen**: Learners often struggle with information overload and difficulty in locating precise, quality learning materials suited to their needs. 

1. **Purpose**: The platform aims to simplify the process of finding relevant learning content for learners by leveraging AI and machine learning technologies.    
2. **Objective**: To create an intelligent web-based solution that provides personalized recommendations and easy access to curated learning resources.  
3. **Key Features**:  
   - Smart search for learning resources.  
   - Personalized content recommendations based on user interests, skill levels, and learning goals.  
   - Multi-format support for videos, articles, and quizzes.  
   - Continuous improvement using machine learning to adapt to user preferences over time.  
4. **Impact**: This project is designed to save time, improve learning efficiency, and provide a seamless experience for students, professionals, and lifelong learners.  
5. **Scalability**: The platform can accommodate diverse subjects, integrate with various learning platforms, and support multi-language content to cater to a global audience.  
## API Reference

#### Get all items

```http
  GET /api/items
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your API key |

#### Get item

```http
  GET /api/items/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### add(num1, num2)

Takes two numbers and returns the sum.


## Installation
## 🛠️ Installation and Setup

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js** (>= 14.x)
- **npm** 

### Clone the Repository

```bash
git clone https://github.com/Microsoft-LSA-Nexus-Chapter/Nexus-Chapter-Website
```
```bash
cd Nexus-Chapter-Website
```

### Install Dependencies
 ```bash
 npm install
 ```

 ### Running the Development Server
 ```bash
 npm run dev
 ```

 It will open at https:/localhost/3000
 ## Project Structure
```
|src/
    ├── app/                # App Router, entry point for Next.js routes
       ├── layout.tsx      # Layout component for all pages
       ├── page.tsx        # Home page component
       ├── events/page.tsx  # Events section with nestedroutes
       |___ gallery/page.tsx  # Gallery of all the events
       |___ members/page.tsx  # Members of the MLSA Nexus chapter
       └── about/page.tsx         # About section with static content
       |___ Contact/page.tsx  # Contact Page
    ├── components/         # Reusable components (Header, Footer, etc.)
├── public/             # Static files like images and icons
    ├── images/
├── styles/             # Global styles and Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── tailwind.config.js  # Tailwind CSS configuration
```
## 🚀Tech Stack

**Client:** 
- **Next.js**: React-based framework using the App Router for a modular structure.
- **TypeScript**: Superset of JavaScript that adds static typing.
- **Tailwind CSS**: Utility-first CSS framework for custom UI styling.
- **API Integration**: (Optional) APIs for fetching chapter updates, event details, etc.
- **HTML/CSS/JavaScript**: For website structure and styling.
- **React.js**: For building a responsive and interactive UI.
- **Node.js** with Express: For server-side operations and API development.
- **Flask**: Lightweight framework for handling backend services and integrating AI models.
- **PostgreSQL**: Databases for storing user profiles and recommendation data.
- **Firebase** : used for user authentication 
- **Python**: For developing and training AI models.
- **TensorFlow/PyTorch**: Libraries used for machine learning.
- **Jupyter**: For developing, testing, and visualizing machine learning models.
- **Vercel**: Services for hosting the application and managing resources.

**Server:** Node, Express

## 📚 Resources 

### GitHub Public Repository Link: 
```bash
   Link
```
### Demo Video Link:
```bash
   Link
```
### Prototype Working Video Link:
```bash
   Link
```
### Final Product Link:
```bash
   Link
```

## Wireframes
 here you can paste pic and flowchat
