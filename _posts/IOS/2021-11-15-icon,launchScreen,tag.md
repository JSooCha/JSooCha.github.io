---
title: icon, launchScreen, tag
author_profile: true
sidebar_main: true
categories: iOS
---

## 강의 요약 및 실습화면  

### Attributes  
선언과 타입에 부가적인 정보를 제공한다.    

- 선언에 적용되는 것과 type에 적용되는 두 가지 attribute가 존재  
- @attribute 명(attribute arguments)  
- IBOutlet : 인터페이스 빌더에서 클래스 프로퍼티 선언에 사용  
- IBAction : 인터페이스 빌더에서 클래스 메서드 선언에 사용  

### Break point  
행번호 클릭 시 브레이크 포인트가 생성되며 해당 줄에서 실행이 멈춘다.  
![1](https://user-images.githubusercontent.com/90169862/141695694-5b0deab3-a1d6-4eff-aa1b-fed695550b67.JPG)  
시뮬레이터 실행 후 버튼 클릭 시 실행 종료 -> Debug area console에 Hi가 출력되지 않은 것을 확인할 수 있다.  

### Connections Inspector  
![2](https://user-images.githubusercontent.com/90169862/141695710-09aa8ded-e69b-467e-af71-5c8d62f00b5f.JPG)  
Outlet이나 Action의 연결 관계를 확인할 수 있다. Outlet이나 Action을 중복하여 연결하면 오류가 발생하므로 Connections Inspector를 활용한다.  

### Storyboard Entry Point  
![3](https://user-images.githubusercontent.com/90169862/141695723-2d1bfb11-ae97-41da-8037-fbebbc021abb.JPG)  
앱이 시작하는 화면(화살표 표시)  
Attribute Inspector에서 Is initial View Controller 체크로 설정이 가능하다.  

### Assets.xcassets의 AppIcon에 크기별 아이콘 추가  
![4](https://user-images.githubusercontent.com/90169862/141695732-ad5e1298-8b6c-4ba6-b7d4-0c727d0f94a7.JPG)  

### Image View 추가  
![5](https://user-images.githubusercontent.com/90169862/141695742-391be017-e23c-447f-bfe3-1fcbe1860e5f.JPG)  

### LaunchScreen 추가    
![6](https://user-images.githubusercontent.com/90169862/141695748-ef26228d-c20d-4f90-8969-f07b629771f5.JPG)    

### UILabel 클래스의 property 사용해보기    
![7](https://user-images.githubusercontent.com/90169862/141695757-7ccddd11-b3e4-4a8b-9b45-12ebdeabd1b3.JPG)  
textColor를 이용하여 버튼 클릭 시 글자색을 파란색으로 변경한다.  

![8](https://user-images.githubusercontent.com/90169862/141695762-ca743c3f-6f10-4f4f-9f8e-fbe585470f4e.JPG)  
font를 이용하여 버튼 클릭 시 글자를 볼드체, 크기 50으로 변경한다.  

### Text Field와 Label 내용 삭제하는 버튼 만들기  

#### 방법 1 : 버튼 생성 후 액션 추가    
![9](https://user-images.githubusercontent.com/90169862/141695774-2df2f15d-373c-46c5-ab13-e7d5400d9ad2.JPG)    
  
![99](https://user-images.githubusercontent.com/90169862/141695782-ebda2a48-57ec-4795-900a-973bbfb28bd7.JPG)  
버튼에 액션을 추가하고 Delete 버튼 클릭 시 라벨 텍스트를 공백으로 변경하는 소스를 작성한다.  

#### 방법 2 : 버튼 생성 후 기존 액션에 sender.tag로 기능 추가  
![10](https://user-images.githubusercontent.com/90169862/141695817-3510cd4c-0e13-4742-aa91-e5606f590fce.JPG)  

![1010](https://user-images.githubusercontent.com/90169862/141695823-53646b59-7d26-4d8c-8528-d85d7c82096d.JPG)  
눌러봐 버튼의 태그를 1, Delete 버튼의 태그를 2로 설정하고 기존 액션을 연결하고 if문을 통해 태그를 구분하여 사용한다.  

### 도전 : Up Down 앱  

#### 방법 1 : 버튼 생성 후 액션 추가  
![11](https://user-images.githubusercontent.com/90169862/141695836-d06b405f-4f8b-4cdc-9cb7-ac164d653d42.JPG)  

#### 방법 2 : 버튼 생성 후 기존 액션에 sender.tag로 기능 추가  
![12](https://user-images.githubusercontent.com/90169862/141695848-769f708d-1dd1-44fb-bc59-5bc20e140c3b.JPG)  

#### 앱아이콘  
![13](https://user-images.githubusercontent.com/90169862/141695855-1b2136a7-fe3e-4dfa-a8bf-51efe2b3001d.JPG)  

#### 런치스크린  
![14](https://user-images.githubusercontent.com/90169862/141695857-3baf75e5-6b85-4f57-9f22-95f0a83c7f32.JPG)  


__출처 : 'iOS프로그래밍기초(21-2학기)한성현교수님 강의 내용 변형 및 요약'__  







  




