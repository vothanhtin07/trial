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
        bat '$env:NODE_ENV="prod";npm run test --tags="@LoginScrenarios"'
      }
    }
  }
}
