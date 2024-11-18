pipeline {
    agent any
    environment {
        DEPLOY_SERVER = 'root@8.tcp.ngrok.io'           // IP o dominio del servidor de despliegue
        DEPLOY_PORT = '16632'                           // Puerto del servidor de despliegue
        DEPLOY_PATH = '/usr/local/apache2/htdocs'
        SSH_CREDENTIALS_ID = 'URIEL_SSH_KEY'            // ID de las credenciales SSH almacenadas en Jenkins
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
                    ssh -p ${env.DEPLOY_PORT} ${env.DEPLOY_SERVER} 'rm -rf ${env.DEPLOY_PATH}/*'
                    scp -P ${env.DEPLOY_PORT} -r * ${env.DEPLOY_SERVER}:${env.DEPLOY_PATH}
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
                    ssh -p ${env.DEPLOY_PORT} ${env.DEPLOY_SERVER} 'sudo systemctl restart apache2'
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