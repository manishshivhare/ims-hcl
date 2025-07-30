```mermaid
flowchart TD
    A[Application Start] --> B[Initialize State]
    B --> C{Language Selection}
    C --> D[Hindi Selected] 
    C --> E[English Selected]
    D --> F[Dashboard View]
    E --> F[Dashboard View]
    
    F --> G{Navigation Choice}
    G --> H[Dashboard]
    G --> I[Customizations]
    G --> J[Queue Management]
    
    %% Dashboard Flow
    H --> K[Display Stats]
    K --> L[Total Products, Stock, Sales]
    K --> M[Low Stock Alerts]
    K --> N[Overdue Customizations]
    
    H --> O{Action Selection}
    O --> P[View Product Details]
    O --> Q[Add New Product]
    O --> R[New Customization]
    
    %% Product Management Flow
    P --> S[Product Detail View]
    S --> T{Product Actions}
    T --> U[Make Sale]
    T --> V[Add Stock]
    T --> W[Back to Dashboard]
    
    U --> X{Stock Available?}
    X -->|Yes| Y[Process Sale]
    X -->|No| Z[Show Error]
    Y --> AA[Update Product Stock]
    Y --> BB[Update Total Sold]
    Y --> CC[Calculate Profit]
    Z --> S
    
    V --> DD[Add Stock Form]
    DD --> EE[Update Stock Quantity]
    EE --> S
    
    %% Add Product Flow
    Q --> FF[Add Product Form]
    FF --> GG{Form Validation}
    GG -->|Valid| HH[Create New Product]
    GG -->|Invalid| II[Show Validation Errors]
    HH --> JJ[Add to Products Array]
    JJ --> F
    II --> FF
    
    %% Customization Flow
    R --> KK[Add Customization Form]
    I --> LL[View Customizations List]
    
    KK --> MM{Customization Validation}
    MM -->|Valid| NN[Create Customization Order]
    MM -->|Invalid| OO[Show Validation Errors]
    NN --> PP[Add to Customizations Array]
    PP --> I
    OO --> KK
    
    LL --> QQ{Customization Actions}
    QQ --> RR[Update Status to In Progress]
    QQ --> SS[Mark as Completed]
    QQ --> TT[Mark as Delivered]
    
    RR --> UU[Status: pending → inProgress]
    SS --> VV[Status: inProgress → completed]
    TT --> WW[Status: completed → delivered]
    UU --> I
    VV --> I
    WW --> I
    
    %% Queue Management Flow
    J --> XX[Queue Management View]
    XX --> YY[Display Currently Serving]
    XX --> ZZ[Show Waiting Queue]
    ZZ --> AAA[Auto-update Timer]
    AAA --> BBB[Decrease Wait Times]
    BBB --> CCC[Remove Completed Customers]
    
    %% State Management
    DDD[State Management] --> EEE[Products State]
    DDD --> FFF[Customizations State]
    DDD --> GGG[Queue State]
    DDD --> HHH[Language State]
    DDD --> III[Current View State]
    
    EEE --> JJJ[Product CRUD Operations]
    FFF --> KKK[Customization CRUD Operations]
    GGG --> LLL[Queue Updates]
    
    %% Data Calculations
    MMM[Real-time Calculations] --> NNN[Total Products Count]
    MMM --> OOO[Total Stock Sum]
    MMM --> PPP[Today's Sales]
    MMM --> QQQ[Low Stock Items]
    MMM --> RRR[Active Customizations]
    MMM --> SSS[Waiting Customers Count]
    MMM --> TTT[Overdue Customizations]
    
    %% Form Handlers
    UUU[Form Handlers] --> VVV[Product Form Validation]
    UUU --> WWW[Customization Form Validation]
    UUU --> XXX[Input Change Handlers]
    
    %% Styling Classes
    classDef startEnd fill:#e1f5fe,stroke:#01579b,stroke-width:2px,color:#000
    classDef process fill:#f3e5f5,stroke:#4a148c,stroke-width:2px,color:#000
    classDef decision fill:#fff3e0,stroke:#e65100,stroke-width:2px,color:#000
    classDef state fill:#e8f5e8,stroke:#1b5e20,stroke-width:2px,color:#000
    classDef error fill:#ffebee,stroke:#c62828,stroke-width:2px,color:#000
    
    class A,W startEnd
    class B,F,H,I,J,S,FF,KK,LL,XX process
    class C,G,O,T,X,GG,MM,QQ decision
    class DDD,EEE,FFF,GGG,HHH,III,MMM state
    class Z,II,OO error
