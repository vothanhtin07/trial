pipeline {
  agent any

  stages {
    stage('install npm') {
      steps {
        bat 'npm install'
      }
    }
    stage('install playwright') {
      steps {
        bat 'npx playwright install'
      }
    }
    stage('test') {
      steps {
        bat 'set node_env=prod;npm run test --tags="@LoginScrenarios"'
      }
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
