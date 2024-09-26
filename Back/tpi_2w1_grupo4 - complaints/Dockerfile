FROM openjdk:17-jdk

ENV DATABASE_URL jdbc:mysql://mysqldb:3306/prueba
ENV DATABASE_USERNAME mvz_user
ENV DATABASE_PASSWORD 56789
ENV DATABASE_PLATAFORM org.hibernate.dialect.MySQL8Dialect
ENV DATABASE_DRIVEN com.mysql.cj.jdbc.Driver

COPY target/tpi_2w1_grupo4-0.0.1-SNAPSHOT.jar app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]