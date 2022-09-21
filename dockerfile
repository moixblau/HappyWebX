FROM httpd:latest
COPY ./src/ /usr/local/apache2/htdocs/
RUN 
EXPOSE 80