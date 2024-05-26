pipeline {
  agent any

  stages {
    stage('install playwright') {
      steps {
        bat 'npm install'
      }
    }
    stage('help') {
      steps {
        bat 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        bat '$env:NODE_ENV="prod";npm run test --tags="@LoginScrenarios"'
      }
    }
  }
}
