---
title: 애플리케이션 빌드 / 실행 / 배포
excerpt: 애플리케이션 빌드 / 실행 / 배포
categories: Spring
tags: [codestates, Java, Spring]
toc: true
toc_sticky: true
author_profile: true
sidebar_main: true
published : false
---

# 애플리케이션 빌드/실행/배포

## 애플리케이션 빌드

- ### IntelliJ IDE를 이용한 빌드
  - 우측 상단 Gradle - [프로젝트 이름] - Tasks - build에서 :bootJar 또는 :build task 실행
  - 빌드가 정상적으로 종료되면 build/libs 디렉토리에 Jar 파일 하나가 생성됨
    - 로컬 PC에서 실행 가능한 애플리케이션 실행 파일
  > :build와 :bootJar 중 어떤 task를 실행해서 애플리케이션 실행 파일을 만들어야 될까?  
  > __:build__ - :assemble, :check 같이 Gradle에서 빌드와 관련된 모든 task들을 실행시킴. 그리고 실행 가능한 Jar 파일 이외에 plain Jar 파일 하나를 더 생성함  
  > __:bootJar__ - 빌드와 관련된 모든 task들을 실행하는 것이 아니라 애플리케이션의 실행 가능한 Jar(Executable Jar)파일을 생성하기 위한 task만 실행  
  > -> 단순히 Executable Jar 파일만 필요하다면 :bootJar task 실행

- ### Gradle Task를 이용한 빌드
  - 프로젝트가 위치해 있는 디렉토리 경로로 이동
  - Gradle task를 CLI 명령으로 입력할 수 있는 콘솔창을 프로젝트 root 경로에서 오픈
    - Windows의 cmd나 Git Bash, Windows Power Shell, 터미널 등 모두 가능
  - 아래의 명령을 입력해서 애플리케이션 빌드 진행
    - Windows 터미널의 경우
      ```
      PS E:\project\section3-week4-build> .\gradlew bootJar
      ```
    - Git Bash의 경우
      ```
      MINGW64 /e/project/section3-week4-build (main)
      $ ./gradlew build
      ```
  - 빌드가 정상적으로 종료되면 build/libs 디렉토리에 Jar 파일 하나가 생성됨

## 애플리케이션 실행
  - ### 생성된 Jar(Executable Jar) 파일을 이용하여 애플리케이션 실행
    - 빌드를 통해 생성된 Jar 파일이 있는 디렉토리 경로로 이동
    - 터미널 창을 오픈 한 후, 다음과 같이 입력
        ```
        java -jar Jar 파일명.jar
        ```
  - ### 프로파일(Profile)
    - 빌드 후 생성되는 애플리케이션 실행 파일에 대한 실행 환경을 간단한 명령어 한 줄 만으로 설정할 수 있는 편리한 기능
    - 애플리케이션이 빌드 될 때, 로컬 환경에서는 로컬 환경의 DB 설정 정보를 실행 파일에 포함하고, 서버 환경일 경우에는 서버 환경의 DB 설정 정보를 실행 파일에 포함시킴
    - 기존의 application.yml 파일 외에 application-local.yml 파일과 application-server.yml 파일 추가
      - application.yml 
        ```
        # 일반적으로 애플리케이션 실행 환경에 상관없는 공통 정보들은 application.yml에 설정
        # 현재는 비어있는 상태
        ```
      - application-local.yml
        ```
        # 로컬 환경에서 사용하는 정보들은 application-local.yml 파일에 설정
        spring:
        h2:
            console:
            enabled: true
            path: /h2
        datasource:
            url: jdbc:h2:mem:test
        jpa:
            hibernate:
            ddl-auto: create  # (1) 스키마 자동 생성
            show-sql: true      # (2) SQL 쿼리 출력
            properties:
            hibernate:
                format_sql: true  # (3) SQL pretty print
        sql:
            init:
            data-locations: classpath*:db/h2/data.sql
        logging:
        level:
            org:
            springframework:
                orm:
                jpa: DEBUG
        server:
        servlet:
            encoding:
            force-response: true
        ```
      - application-server.yml
        ```
        # 서버 환경에서 사용하는 정보들은 application-server.yml 파일에 설정
        # 현재는 비어있는 상태
        # 대표적인 서버 환경의 설정 정보는 DB 접속 정보
        ```
- ### 프로파일 적용
    - 애플리케이션을 실행시키면, application.yml 파일의 정보를 항상 읽어옴  
    현재 application.yml 파일에 H2 관련 설정들이 존재하지 않기 때문에 H2 웹 콘솔이 정상적으로 접속되지 않음
    - ### IntelliJ IDE에서 프로파일 적용
      - [Edit Configurations] - [Program arguments] 필드에 다음과 같이 입력
        ```
        --spring.profiles.active=local
        ``` 
      - 활성화 할 프로파일을 ‘local’로 지정.   
      여기서 ‘local’은 application-local.yml 파일명에서의 ‘local’을 가르킴
      > Spring에서 프로파일을 지정하는 가장 손쉬운 방법은 application-local.yml 처럼 ‘-(대시)’를 기준으로 프로파일명을 yml 파일 이름안에 포함하는 것
      ```
      [main] c.c.Section3Week4BuildApplication : Starting Section3Week4BuildApplication using Java 11.0.1 on hjs6877 with PID 2756
      [main] c.c.Section3Week4BuildApplication : The following 1 profile is active: local
      ```
      실행 시 로그에서 프로파일이 적용된 것을 확인 가능

    - ### 빌드된 실행 파일에 프로파일 적용
      - IntelliJ IDE 같은 개발 환경에서 테스트를 위해 프로파일을 변경해야 할 경우도 있지만 프로파일 기능은 빌드된 실행 파일을 어느 환경에서 실행할 지 여부를 결정할 때 주로 사용
      - 터미널에 다음 명령어 입력
        ```
        /e/project/section3-week4-build/build/libs (main)
        $ java -jar section3-week4-build-0.0.1-SNAPSHOT.jar --spring.profiles.active=local
        ```
        실행 파일을 실행 시키는 java -jar section3-week4-build-0.0.1-SNAPSHOT.jar에 --spring.profiles.active=local 설정 추가

## 애플리케이션 배포
  - ### 전통적인 배포 방법
    -  scp나 sftp 같은 표준 유닉스 툴을 이용하여 서버로 간단히 전송
    - 서버로 전송된 Jar 파일은 JVM이 설치된 환경이라면 어디서든 손쉽게 실행 가능
  - ### 클라우드 서비스를 위한 배포 방법  
    Executable Jar 파일은 특히 클라우드 환경에 손쉽게 배포 가능
    - PaaS(Platform as a Service)
      - Cloud Foundry, Heroku
      - 대표적인 PaaS 제공 기업 Cloud Foundry의 cf command line 툴
      - cf command line 툴 사용 예
        ```
        $ cf push acloudyspringtime -p target/app-0.0.1-SNAPSHOT.jar
        ```
    - IaaS(Infrastructure as a Service)
      - AWS Elastic Beanstalk, AWS Container Registry, AWS Code Deploy
      - Azure(MicroSoft 클라우드 서비스) - Azure Spring Cloud, Azure App Service 에서 Spring Boot 기반의 Executable Jar 파일 배포 기능 제공
      - Google Cloud - Executable Jar 파일 배포를 위한 여러가지 옵션 제공
    - CI / CD 플랫폼을 사용한 배포
      -  Github Actions, Circle CI 같은 CI / CD 플랫폼을 이용해 AWS나 Azure 같은 클라우드 서비스에 Executable Jar 파일을 자동 배포하도록 구성 가능 -> 배포 자동화