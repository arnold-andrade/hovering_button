pipeline {
    agent any

    environment {
        NETLIFY_AUTH_TOKEN = credentials('netlify-auth-token')
        NETLIFY_SITE_ID = credentials('netlify-site-id')
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: '[https://github.com/arnold-andrade/hovering_button.git'](https://github.com/arnold-andrade/hovering_button.git')
            }
        }
        stage('Deploy to Netlify') {
            steps {
                sh 'npm install -g netlify-cli'
                sh 'netlify deploy --prod --dir=data --auth $NETLIFY_AUTH_TOKEN --site $NETLIFY_SITE_ID'
            }
        }
    }
}