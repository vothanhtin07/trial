pipeline {
  agent any

  stages {
    stage('install playwright') {
      steps {
        sh 'npm install'
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '$env:NODE_ENV="prod";npm run test --tags="@LoginScrenarios"'
      }
    }
  }
}