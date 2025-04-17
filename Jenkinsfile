// Updated with testing stages - timestamp: 11:03 AM
pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
        NETLIFY_SITE_ID = credentials('netlify-site-id')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/arnold-andrade/hovering_button.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        
        stage('Verify Content') {
            steps {
                bat 'dir'
                bat 'dir data'
            }
        }
        stage('Deploy to Netlify') {
            steps {
                // Install netlify-cli locally instead of globally
                bat 'npm install netlify-cli'
                // Use npx to run the locally installed netlify CLI
                bat 'npx netlify deploy --prod --dir=data --auth %NETLIFY_AUTH_TOKEN% --site %NETLIFY_SITE_ID%'
            }
        }
    }
}