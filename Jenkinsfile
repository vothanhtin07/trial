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
        bat 'npm run test'
      }
    }
  }
}
