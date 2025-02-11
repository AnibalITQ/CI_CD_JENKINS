pipeline {
    agent any
    environment {
        DEPLOY_SERVER = '6.tcp.ngrok.io'
        DEPLOY_PORT = '11211'
        DEPLOY_PATH = '/usr/local/apache2/htdocs'
        SSH_CREDENTIALS_ID = 'URIEL_SSH_KEY'
    }
    
    stages {
        stage('Preparación') {
            steps {
                echo 'Clonando repositorio y preparando archivos...'
                git 'https://github.com/BacSJavier/CI_CD_JENKINS.git'
            }
        }
        
        stage('Construcción') {
            steps {
                echo 'No se requiere compilación para archivos HTML/JavaScript básicos solo si fueran frameworks.'
            }
        }
        
        stage('Despliegue') {
            steps {
                echo 'Desplegando archivos en el servidor...'
                // Elimina el contenido y transfiere archivos al servidor remoto
                sshagent (credentials: [SSH_CREDENTIALS_ID]) {
                    sh """
                    mkdir -p /var/jenkins_home/.ssh
                    chmod 700 /var/jenkins_home/.ssh
                    ssh-keyscan -p ${env.DEPLOY_PORT} ${env.DEPLOY_SERVER} >> /var/jenkins_home/.ssh/known_hosts
                    ssh -p ${env.DEPLOY_PORT} root@${env.DEPLOY_SERVER} 'rm -rf ${env.DEPLOY_PATH}/*'
                    scp -P ${env.DEPLOY_PORT} -r * root@${env.DEPLOY_SERVER}:${env.DEPLOY_PATH}
                    """
                }
            }
        }
        
        stage('Reinicio del Servidor Web') {
            steps {
                echo 'Reiniciando el servidor web...'
                // Reiniciar el servidor web en el servidor remoto
                sshagent (credentials: [SSH_CREDENTIALS_ID]) {
                    sh """
                    ssh -p ${env.DEPLOY_PORT} root@${env.DEPLOY_SERVER} 'pkill -f apache2 && nohup apache2 &'
                    """
                }
            }
        }
    }
    
    post {
        success {
            echo 'Despliegue completado con éxito.'
        }
        failure {
            echo 'El despliegue ha fallado.'
        }
    }
}