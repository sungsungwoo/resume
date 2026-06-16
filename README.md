# Backend Developer Portfolio

성성우의 서버·백엔드 개발자 포트폴리오 웹사이트입니다.

C/C++, Java 기반의 장기간 운영 서버 개발 경험을 바탕으로, Java/Spring Boot 백엔드 프로젝트와 운영 중심의 개발 역량을 정리한 개인 포트폴리오입니다.

## Overview

이 포트폴리오는 다음 내용을 소개합니다.

- 서버·백엔드 개발 경력 요약
- Java/Spring Boot 기반 포트폴리오 프로젝트
- C/C++, UNIX/Linux, TCP/IP Socket 기반 운영 서버 개발 경험
- 통신 플랫폼, 과금 시스템, 관제 시스템, 금융 데이터 처리 시스템 개발 경험
- 프로젝트 협업 및 채용 문의를 위한 Contact 페이지

## Pages

| Page | Description |
| --- | --- |
| `index.html` | 메인 소개 페이지 |
| `resume.html` | 경력 요약, 기술 스택, 주요 업무 경험 |
| `projects.html` | 백엔드 및 운영 시스템 포트폴리오 프로젝트 |
| `contact.html` | 문의 전송 폼 |

## Main Projects

### Kiosk Incident Copilot

무인 키오스크 운영 장애를 탐지하고 원인 분석과 대응 흐름을 지원하는 AIOps 스타일의 운영 보조 시스템입니다.

- C 기반 경량 에이전트와 Python 장애 시나리오 생성기 구성
- 앱, 네트워크, 결제 단말, 프린터, SIM 상태 기반 인시던트 생성
- 로그 패턴, 이벤트, 메트릭 임계치 기반 rule engine 설계
- PostgreSQL FTS와 pgvector를 결합한 Hybrid RAG 검색
- LLM 분석, confidence score, 추천 런북, 승인형 액션, 감사 로그 흐름 구성

### NFC/QR 기반 출입·근태 관리 운영 시스템

NFC 카드와 QR코드 인증을 기반으로 출입 및 근태 이벤트를 관리하는 실무형 운영 플랫폼입니다.

- C# WPF 기반 현장 인증 클라이언트 구현
- ASP.NET Core Web API 기반 인증 판단 및 이력 저장
- MSSQL 기반 사용자, 인증수단, 장소, 권한, 이력, 통계 데이터 모델 구성
- 미등록 인증수단, 권한 없음, 만료 QR 등 실패 사유 코드화
- 오프라인 큐, 재전송, 중복 태깅 방지, 감사 로그 등 현장 운영 안정성 반영

### Oracle 기반 PDF 생성 및 다채널 발송 관리 시스템

Oracle DB 데이터를 기반으로 고지서와 납부확인서 PDF를 생성하고 발송 이력을 관리하는 관리자 시스템입니다.

- Spring Boot 기반 PDF 생성 및 발송 관리 API 설계
- Oracle 조회 쿼리, HTML 템플릿, 변수 매핑, 템플릿 버전 관리 구조 구성
- 단건·다건 PDF 생성, 미리보기, 다운로드 처리
- PDF 생성 이력, 데이터 스냅샷, 이메일 발송 성공·실패 이력 관리
- SQL 검증, 파라미터 바인딩, 실행 제한, 권한 정책 등 운영 리스크 대응

### KnowledgeOps 문서 기반 AI 질의응답 평가 플랫폼

네트워크·통신 규격서와 운영 매뉴얼을 기반으로 RAG, SFT, 평가 기능을 실험하는 AI 백엔드 포트폴리오입니다.

- PDF, DOCX, TXT, Markdown 문서 업로드 및 인덱싱
- 문서 파싱, 청킹, 임베딩 생성, pgvector 기반 검색
- Spring AI와 로컬 LLM 기반 RAG 답변 생성
- Base, RAG, SFT, RAG+SFT 답변 비교 실험
- Redis Streams 기반 비동기 문서 처리와 SSE 기반 스트리밍 응답 구성

### Mini SCADA 설비 모니터링 시스템

Modbus 기반 설비 데이터를 수집하고 실시간 대시보드와 알람으로 표시하는 미니 SCADA 관제 시스템입니다.

- Python Modbus Simulator 기반 가상 설비 데이터 생성
- Spring Scheduler와 비동기 스레드 기반 Modbus Polling 수집
- TimescaleDB 기반 고빈도 시계열 데이터 저장
- MQTT over WebSockets 기반 실시간 이벤트 전파
- 설비 상태, 센서 값, 트렌드 차트, 알람 이력, Ack 처리 기능 구성

### 빈자리 실시간 예약 및 스케줄링 플랫폼

상담, 레슨, 회의실 등 시간 기반 서비스를 위한 실시간 예약 플랫폼입니다.

- FastAPI 기반 예약 API와 React 기반 캘린더 UI 구성
- Redis TTL 기반 예약 슬롯 임시 선점
- PostgreSQL 트랜잭션, 배타적 잠금, 고유 제약조건 기반 중복 예약 방지
- Idempotency-Key 기반 중복 요청 방어
- WebSocket과 Redis Pub/Sub 기반 예약 상태 실시간 알림 구성

### 중앙선거관리위원회 유무선통신장비 및 NMS 관제

사전투표소에서 사용되는 LTE 라우터 기반 유·무선 통신장비의 펌웨어와 NMS 관제 시스템을 개발·유지보수한 운영 중심 프로젝트입니다.

- OpenWRT 기반 LTE 라우터 장비 펌웨어 개발
- C/C++ 기반 네트워크 모듈, 장비 상태 모니터링, 데이터 전송 기능 구현
- C# 기반 장비 제어 및 설정 도구 개발
- Spring Boot와 MySQL 기반 NMS 관제 백엔드 구성
- 장비 상태 수집, 로그 관리, 경보 알림, Jenkins 기반 자동 스케줄링 환경 구성

## Tech Stack

### Frontend / UI

- HTML5, CSS3, JavaScript
- React, TypeScript, Vite
- Tailwind CSS, React Query
- Responsive Web Layout
- WPF, MVVM

### Backend / API

- Java, Spring Boot, Spring Security, JWT
- ASP.NET Core Web API
- FastAPI, Python, SQLModel
- REST API, SSE, WebSocket
- Scheduler, 비동기 처리, 트랜잭션 기반 업무 처리

### Database / Data Processing

- Oracle, MSSQL, MySQL, PostgreSQL
- TimescaleDB, pgvector
- Redis, Redis Streams, Redis Pub/Sub
- SQL 검증, 파라미터 바인딩, 데이터 스냅샷, 이력 관리
- 시계열 데이터 저장, 벡터 검색, 전문/로그/운영 데이터 처리

### AI / Search

- Spring AI
- RAG, Hybrid RAG, SFT
- Ollama, Local LLM
- PostgreSQL FTS, Vector Search, Reranking
- 문서 파싱, 청킹, 임베딩, 평가 지표 관리

### Device / Monitoring / Operations

- C, C++, C#
- TCP/IP Socket, Modbus TCP, MQTT
- OpenWRT, LTE Router, NMS
- Linux / UNIX
- Docker, Nginx, Jenkins
- 장애 분석, 로그 기반 원인 파악, 운영 안정화

### Contact Form

`contact.html`의 문의 폼은 정적 사이트에서도 메일 전송이 가능하도록 FormSubmit을 사용합니다.

첫 전송 시 수신 이메일에서 FormSubmit 확인 메일을 승인해야 이후 문의 메일이 정상적으로 수신됩니다.

민감한 정보나 비공개 자료는 Contact 폼으로 받지 않는 것을 권장합니다.

## Folder Structure

```text
.
├── index.html
├── resume.html
├── projects.html
├── contact.html
├── css/
│   └── style.css
├── js/
│   └── components.js
├── images/
│   └── profile.jpg
└── files/
    └── resume.pdf
```

## Run Locally

HTML 파일을 직접 더블클릭해서 여는 방식보다 로컬 웹서버로 확인하는 것을 권장합니다.

```bash
python -m http.server 8000
```

브라우저에서 아래 주소로 접속합니다.

```text
http://localhost:8000
```

Contact 폼은 `file:///` 방식에서는 정상 동작하지 않을 수 있으므로, 반드시 `http://` 또는 `https://` 주소에서 테스트해야 합니다.

## Deploy With GitHub Pages

1. GitHub 저장소를 생성합니다.
2. 포트폴리오 파일을 저장소에 업로드합니다.
3. 저장소의 `Settings` 메뉴로 이동합니다.
4. `Pages` 메뉴에서 배포 브랜치를 선택합니다.
5. 배포가 완료되면 GitHub Pages URL로 접속해 화면과 Contact 폼을 확인합니다.

## SEO

각 페이지에는 검색 노출을 위한 기본 메타 태그가 포함되어 있습니다.

- `title`
- `description`
- `keywords`
- Open Graph 메타 태그
- Twitter Card 메타 태그
- `robots`

실제 도메인을 연결한 경우 각 HTML 파일의 `canonical`, `og:url` 주석 값을 실제 URL로 교체하는 것을 권장합니다.

## Notes

- 이 사이트는 개인 포트폴리오 목적으로 제작되었습니다.
- 프로젝트 설명은 실제 운영 경험과 백엔드 포트폴리오 구현 내용을 함께 정리한 것입니다.
- Contact 폼은 외부 폼 전송 서비스를 사용하므로, 운영 환경에서는 스팸 여부와 개인정보 처리 방식을 함께 검토해야 합니다.
