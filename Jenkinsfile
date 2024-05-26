pipeline {
  agent any

  stages {
    stage('install playwright') {
      steps {
        bat 'npm install'
      }
    }
    stage('test') {
      steps {
        bat '$env:NODE_ENV="prod";npm run test --tags="@LoginScrenarios"'
      }
    }
  }
}
