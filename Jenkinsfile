pipeline {
  agent any

  stages {
    stage('Install NPM') {
      steps {
        bat 'npm install'
      }
    }
    stage('Install Playwright') {
      steps {
        bat 'npx playwright install'
      }
    }
    stage('Run Test Scripts') {
      steps {
        bat 'npm run test'
      }
    }
    stage('Generate Allure Report') {
      post {
        always {
          allure includeProperties:
            false,
            jdk: '',
            results: [[path: 'allure-results']]
        }
      }
    }
  }
}
