---
title: Hello(Xcode)
author_profile: true
sidebar_main: true
---

## 강의 요약 및 실습화면
- Bundle Identifier(번들 ID) : 앱 식별자   
- Deployment Info : 구동 가능한 최소 IOS 사양       
### Playground로 Swift문법과 UI테스트      
![123](https://user-images.githubusercontent.com/90169862/140778559-22eb91b1-47ba-4fa4-a419-19bea88abb47.JPG)      
Automatically Run 기능으로 코드 입력이 끝났을 때 자동으로 컴파일할 수 있으며  우측 사각형 버튼을 통해 상세 결과를 볼 수 있다.  

![23](https://user-images.githubusercontent.com/90169862/140778722-80045463-aa40-481a-a12e-5df8b31d2e6d.JPG)    
Xcode는 크게 navigator, Document Outline, Canvas, inspector 창으로 구성되며 Main.storyboard 파일에서 앱 내의 화면을 구성할 수 있다.  
  
![12312](https://user-images.githubusercontent.com/90169862/140779019-b20364cf-3304-4803-9e35-fdf6f014d3d8.JPG)    
스토리보드에서 다양한 오브젝트의 배치가 가능하며(shift+cmd+l) Assistant editor로(ctrl+alt+command+enter) 스토리보드와 소스를 연결하여(ctrl+클래스 내부 드래그) 아웃렛 변수와 액션 함수를 추가할 수 있다.   
 
![asd](https://user-images.githubusercontent.com/90169862/140779141-c078626f-3c47-43b9-8e4b-400d06498030.JPG)    
Xcode의 자동 완성 기능으로 Fix버튼으로 에러가 난 부분을 자동으로 고쳐준다.  
  
![3424](https://user-images.githubusercontent.com/90169862/140779351-3d707d95-da10-4c69-898f-012e8adb5b65.JPG)  
Xcode의 자동 완성 기능을 통한 강제 옵셔널 바인딩    
  
![asdadas](https://user-images.githubusercontent.com/90169862/140779412-36f41d2f-6f77-4fb3-b7bb-035a9fd1d2fd.JPG)    
시뮬레이터 실행 화면  
  
![asdasd](https://user-images.githubusercontent.com/90169862/140779488-884f4903-a692-4c3f-8258-78a3794a463e.JPG)    
버튼의 액션 함수로 txtName.text 값을 받아 라벨에 Hello,JS를 표시하고 콘솔 창에 출력한다.   
  

### UILabel클래스의 property 3개 정리  
- var text: String? { get set }        
레이블의 text를 사용한다.    

- var font: UIFont! { get set }        
레이블 텍스트 글꼴을 설정한다. (기본값 : 17포인트 크기의 시스템 글꼴) (특정 문자열 지정 가능)  

- var textColor: UIColor! { get set }    
레이블 텍스트의 색상을 변경한다. (특정 문자열 지정 가능)  
  
__출처 : 'iOS프로그래밍기초(21-2학기)한성현교수님 강의 내용 변형 및 요약'__    
