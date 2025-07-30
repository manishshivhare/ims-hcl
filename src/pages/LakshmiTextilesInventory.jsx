"use client"

import { useState, useEffect, useCallback } from "react"
import {
  Package,
  ShoppingCart,
  TrendingUp,
  Plus,
  Minus,
  Eye,
  AlertCircle,
  Globe,
  ArrowLeft,
  Store,
  IndianRupee,
  Palette,
  Clock,
  User,
  Phone,
  Calendar,
  CheckCircle,
  XCircle,
  Settings,
  Users,
  Scissors,
  Target,
  Star
} from "lucide-react"

const LakshmiTextilesSystem = () => {
  // Language state
  const [currentLanguage, setCurrentLanguage] = useState("hi")

  // Translation object (expanded for customization features)
  const translations = {
    hi: {
      // Header
      shopName: "लक्ष्मी टेक्सटाइल्स",
      shopSubtitle: "Lakshmi Textiles - Complete Management System",

      // Navigation
      newProduct: "नया उत्पाद",
      back: "वापस",
      dashboard: "डैशबोर्ड",
      customizations: "कस्टमाइज़ेशन",
      queue: "कतार",

      // Dashboard stats
      totalProducts: "कुल उत्पाद",
      totalStock: "कुल स्टॉक",
      todaysSales: "आज की बिक्री",
      lowStock: "कम स्टॉक",
      activeCustomizations: "सक्रिय कस्टमाइज़ेशन",
      waitingCustomers: "प्रतीक्षारत ग्राहक",

      // Customization statuses
      pending: "लंबित",
      inProgress: "प्रगति में",
      completed: "पूर्ण",
      delivered: "वितरित",

      // Customization types
      embroidery: "कढ़ाई",
      tailoring: "दर्जी",
      pattern: "पैटर्न",
      border: "बॉर्डर",

      // Priority levels
      urgent: "तत्काल",
      high: "उच्च",
      normal: "सामान्य",
      low: "कम",

      // Alerts
      stockRunningLow: "स्टॉक खत्म होने वाला है!",
      onlyLeft: "केवल",
      left: "बचे हैं",
      customizationOverdue: "कस्टमाइज़ेशन में देरी!",

      // Product list
      productList: "उत्पाद सूची",
      stock: "स्टॉक:",
      buying: "खरीद: ₹",
      selling: "बेच: ₹",
      sold: "बेचे गए:",

      // Product details
      productInfo: "उत्पाद जानकारी",
      category: "श्रेणी:",
      currentStock: "वर्तमान स्टॉक:",
      minStock: "न्यूनतम स्टॉक:",
      buyingPrice: "खरीद मूल्य:",
      sellingPrice: "बिक्री मूल्य:",
      soldToday: "आज बेचे गए:",
      todaysProfit: "आज का मुनाफा:",

      // Actions
      makeSale: "बिक्री करें",
      sell: "बेचें ₹",
      addStock: "स्टॉक जोड़ें",
      addStockButton: "स्टॉक जोड़ें",
      newCustomization: "नया कस्टमाइज़ेशन",

      // Add product form
      addNewProduct: "नया उत्पाद जोड़ें",
      productName: "उत्पाद का नाम",
      productNamePlaceholder: "जैसे: Cotton Saree - Red",
      categoryLabel: "श्रेणी",
      initialStock: "शुरुआती स्टॉक",
      minStockLabel: "न्यूनतम स्टॉक",
      buyingPriceLabel: "खरीद मूल्य",
      sellingPriceLabel: "बिक्री मूल्य",
      addProductButton: "उत्पाद जोड़ें",

      // Customization form
      customerName: "ग्राहक का नाम",
      customerPhone: "फोन नंबर",
      baseProduct: "मूल उत्पाद",
      customizationType: "कस्टमाइज़ेशन प्रकार",
      description: "विवरण",
      estimatedDays: "अनुमानित दिन",
      priority: "प्राथमिकता",
      customizationPrice: "कस्टमाइज़ेशन मूल्य",
      advancePayment: "अग्रिम भुगतान",
      submitCustomization: "कस्टमाइज़ेशन सबमिट करें",

      // Messages
      productAdded: "नया उत्पाद जोड़ा गया!",
      fillAllFields: "कृपया सभी फील्ड भरें",
      soldMessage: "बेचा गया! कुल: ₹",
      notEnoughStock: "पर्याप्त स्टॉक नहीं है!",
      stockAdded: "स्टॉक में जोड़ा गया!",
      customizationAdded: "नया कस्टमाइज़ेशन ऑर्डर जोड़ा गया!",
      pleaseEnterValidPhone: "कृपया वैध फोन नंबर दर्ज करें",
      pleaseEnterValidNumber: "कृपया वैध संख्या दर्ज करें",

      // Queue management
      queueManagement: "कतार प्रबंधन",
      estimatedTime: "अनुमानित समय",
      currentlyServing: "वर्तमान में सेवा दे रहे हैं",
      nextInQueue: "कतार में अगला",
      totalWaiting: "कुल प्रतीक्षारत",

      // Language
      language: "भाषा",
      hindi: "हिंदी",
      english: "English",
    },
    en: {
      // Header
      shopName: "Lakshmi Textiles",
      shopSubtitle: "Complete Management System",

      // Navigation
      newProduct: "New Product",
      back: "Back",
      dashboard: "Dashboard",
      customizations: "Customizations",
      queue: "Queue",

      // Dashboard stats
      totalProducts: "Total Products",
      totalStock: "Total Stock",
      todaysSales: "Today's Sales",
      lowStock: "Low Stock",
      activeCustomizations: "Active Customizations",
      waitingCustomers: "Waiting Customers",

      // Customization statuses
      pending: "Pending",
      inProgress: "In Progress",
      completed: "Completed",
      delivered: "Delivered",

      // Customization types
      embroidery: "Embroidery",
      tailoring: "Tailoring",
      pattern: "Pattern Design",
      border: "Border Work",

      // Priority levels
      urgent: "Urgent",
      high: "High",
      normal: "Normal",
      low: "Low",

      // Alerts
      stockRunningLow: "Stock Running Low!",
      onlyLeft: "Only",
      left: "left",
      customizationOverdue: "Customization Overdue!",

      // Product list
      productList: "Product List",
      stock: "Stock:",
      buying: "Buy: ₹",
      selling: "Sell: ₹",
      sold: "Sold:",

      // Product details
      productInfo: "Product Information",
      category: "Category:",
      currentStock: "Current Stock:",
      minStock: "Minimum Stock:",
      buyingPrice: "Buying Price:",
      sellingPrice: "Selling Price:",
      soldToday: "Sold Today:",
      todaysProfit: "Today's Profit:",

      // Actions
      makeSale: "Make Sale",
      sell: "Sell ₹",
      addStock: "Add Stock",
      addStockButton: "Add Stock",
      newCustomization: "New Customization",

      // Add product form
      addNewProduct: "Add New Product",
      productName: "Product Name",
      productNamePlaceholder: "e.g.: Cotton Saree - Red",
      categoryLabel: "Category",
      initialStock: "Initial Stock",
      minStockLabel: "Minimum Stock",
      buyingPriceLabel: "Buying Price",
      sellingPriceLabel: "Selling Price",
      addProductButton: "Add Product",

      // Customization form
      customerName: "Customer Name",
      customerPhone: "Phone Number",
      baseProduct: "Base Product",
      customizationType: "Customization Type",
      description: "Description",
      estimatedDays: "Estimated Days",
      priority: "Priority",
      customizationPrice: "Customization Price",
      advancePayment: "Advance Payment",
      submitCustomization: "Submit Customization",

      // Messages
      productAdded: "New product added!",
      fillAllFields: "Please fill all fields",
      soldMessage: "sold! Total: ₹",
      notEnoughStock: "Not enough stock!",
      stockAdded: "added to stock!",
      customizationAdded: "New customization order added!",
      pleaseEnterValidPhone: "Please enter a valid phone number",
      pleaseEnterValidNumber: "Please enter a valid number",

      // Queue management
      queueManagement: "Queue Management",
      estimatedTime: "Estimated Time",
      currentlyServing: "Currently Serving",
      nextInQueue: "Next in Queue",
      totalWaiting: "Total Waiting",

      // Language
      language: "Language",
      hindi: "हिंदी",
      english: "English",
    },
  }

  const t = translations[currentLanguage]

  // Enhanced product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Cotton Saree - Red",
      category: "Sarees",
      currentStock: 25,
      buyingPrice: 800,
      sellingPrice: 1200,
      minStock: 10,
      totalSold: 0,
      lastStockAdded: 0,
    },
    {
      id: 2,
      name: "Silk Dupatta - Blue",
      category: "Dupatta",
      currentStock: 15,
      buyingPrice: 500,
      sellingPrice: 750,
      minStock: 8,
      totalSold: 0,
      lastStockAdded: 0,
    },
    {
      id: 3,
      name: "Cotton Kurta - White",
      category: "Kurta",
      currentStock: 30,
      buyingPrice: 400,
      sellingPrice: 650,
      minStock: 15,
      totalSold: 0,
      lastStockAdded: 0,
    },
    {
      id: 4,
      name: "Chiffon Saree - Green",
      category: "Sarees",
      currentStock: 8,
      buyingPrice: 1200,
      sellingPrice: 1800,
      minStock: 12,
      totalSold: 0,
      lastStockAdded: 0,
    },
  ])

  // Customization orders state
  const [customizations, setCustomizations] = useState([
    {
      id: 1,
      customerName: "Priya Sharma",
      customerPhone: "9876543210",
      baseProduct: "Cotton Saree - Red",
      customizationType: "embroidery",
      description: "Golden thread embroidery on borders",
      estimatedDays: 5,
      priority: "high",
      customizationPrice: 800,
      advancePayment: 400,
      status: "inProgress",
      orderDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      completionDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    },
    {
      id: 2,
      customerName: "Rajesh Kumar",
      customerPhone: "9876543211",
      baseProduct: "Cotton Kurta - White",
      customizationType: "tailoring",
      description: "Slim fit alterations",
      estimatedDays: 2,
      priority: "urgent",
      customizationPrice: 300,
      advancePayment: 150,
      status: "pending",
      orderDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      completionDate: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    },
  ])

  // Queue management state
  const [waitingQueue, setWaitingQueue] = useState([
    { id: 1, customerName: "Anita Devi", estimatedTime: 15, service: "Pattern Discussion" },
    { id: 2, customerName: "Mohan Lal", estimatedTime: 25, service: "Embroidery Consultation" },
    { id: 3, customerName: "Sunita Gupta", estimatedTime: 35, service: "Tailoring Measurement" },
  ])

  const [currentView, setCurrentView] = useState("dashboard")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [saleQuantity, setSaleQuantity] = useState(1)
  const [stockQuantity, setStockQuantity] = useState(1)
  const [currentlyServing, setCurrentlyServing] = useState("Rekha Verma - Border Design")

  // Enhanced new product form with better validation - FIXED
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Sarees",
    currentStock: "",
    buyingPrice: "",
    sellingPrice: "",
    minStock: "",
  })

  // Customization form state - FIXED
  const [newCustomization, setNewCustomization] = useState({
    customerName: "",
    customerPhone: "",
    baseProduct: "",
    customizationType: "embroidery",
    description: "",
    estimatedDays: "",
    priority: "normal",
    customizationPrice: "",
    advancePayment: "",
  })

  const categories = ["Sarees", "Kurta", "Dupatta", "Lehenga", "Blouse", "Fabric"]
  const customizationTypes = ["embroidery", "tailoring", "pattern", "border"]
  const priorities = ["urgent", "high", "normal", "low"]

  // Calculate enhanced totals
  const totalProducts = products.length
  const totalStock = products.reduce((sum, product) => sum + product.currentStock, 0)
  const lowStockItems = products.filter((product) => product.currentStock <= product.minStock)
  const todaysSales = products.reduce((sum, product) => sum + product.totalSold * product.sellingPrice, 0)
  const activeCustomizations = customizations.filter(c => c.status !== "delivered").length
  const waitingCustomers = waitingQueue.length
  const overdueCustomizations = customizations.filter(c => 
    c.status !== "delivered" && new Date() > c.completionDate
  )

  // Auto-update queue timer
  useEffect(() => {
    const timer = setInterval(() => {
      setWaitingQueue(prev => 
        prev.map(customer => ({
          ...customer,
          estimatedTime: Math.max(0, customer.estimatedTime - 1)
        })).filter(customer => customer.estimatedTime > 0)
      )
    }, 60000) // Update every minute

    return () => clearInterval(timer)
  }, [])

  // Enhanced handlers
  const handleSale = (productId, quantity) => {
    const product = products.find(p => p.id === productId)
    if (product && product.currentStock >= quantity) {
      setProducts(products.map(p => 
        p.id === productId 
          ? { ...p, currentStock: p.currentStock - quantity, totalSold: p.totalSold + quantity }
          : p
      ))
      setSaleQuantity(1)
      return true
    }
    return false
  }

  const handleAddStock = (productId, quantity) => {
    setProducts(products.map(product => 
      product.id === productId 
        ? { ...product, currentStock: product.currentStock + quantity, lastStockAdded: quantity }
        : product
    ))
    setStockQuantity(1)
  }

  // FIXED: Use useCallback to prevent re-rendering issues
  const handleNewProductChange = useCallback((field, value) => {
    setNewProduct(prev => ({ ...prev, [field]: value }))
  }, [])

  const handleNewCustomizationChange = useCallback((field, value) => {
    setNewCustomization(prev => ({ ...prev, [field]: value }))
  }, [])

  // Enhanced product validation
  const validateProductForm = () => {
    const errors = []
    
    if (!newProduct.name.trim()) errors.push("Product name is required")
    if (!newProduct.currentStock.trim() || isNaN(parseInt(newProduct.currentStock)) || parseInt(newProduct.currentStock) < 0) {
      errors.push("Valid initial stock is required")
    }
    if (!newProduct.buyingPrice.trim() || isNaN(parseFloat(newProduct.buyingPrice)) || parseFloat(newProduct.buyingPrice) < 0) {
      errors.push("Valid buying price is required")
    }
    if (!newProduct.sellingPrice.trim() || isNaN(parseFloat(newProduct.sellingPrice)) || parseFloat(newProduct.sellingPrice) < 0) {
      errors.push("Valid selling price is required")
    }
    if (!newProduct.minStock.trim() || isNaN(parseInt(newProduct.minStock)) || parseInt(newProduct.minStock) < 0) {
      errors.push("Valid minimum stock is required")
    }
    
    return errors
  }

  const handleAddNewProduct = () => {
    const errors = validateProductForm()
    
    if (errors.length > 0) {
      alert(errors.join("\n"))
      return
    }

    const product = {
      id: Math.max(...products.map(p => p.id)) + 1,
      name: newProduct.name.trim(),
      category: newProduct.category,
      currentStock: parseInt(newProduct.currentStock),
      buyingPrice: parseFloat(newProduct.buyingPrice),
      sellingPrice: parseFloat(newProduct.sellingPrice),
      minStock: parseInt(newProduct.minStock),
      totalSold: 0,
      lastStockAdded: parseInt(newProduct.currentStock),
    }

    setProducts([...products, product])
    setNewProduct({
      name: "",
      category: "Sarees",
      currentStock: "",
      buyingPrice: "",
      sellingPrice: "",
      minStock: "",
    })
    setCurrentView("dashboard")
    alert(t.productAdded)
  }

  // Customization handlers
  const validateCustomizationForm = () => {
    const errors = []
    
    if (!newCustomization.customerName.trim()) errors.push("Customer name is required")
    if (!newCustomization.customerPhone.trim() || !/^\d{10}$/.test(newCustomization.customerPhone)) {
      errors.push("Valid 10-digit phone number is required")
    }
    if (!newCustomization.baseProduct.trim()) errors.push("Base product is required")
    if (!newCustomization.description.trim()) errors.push("Description is required")
    if (!newCustomization.estimatedDays.trim() || isNaN(parseInt(newCustomization.estimatedDays)) || parseInt(newCustomization.estimatedDays) < 1) {
      errors.push("Valid estimated days is required")
    }
    if (!newCustomization.customizationPrice.trim() || isNaN(parseFloat(newCustomization.customizationPrice)) || parseFloat(newCustomization.customizationPrice) < 0) {
      errors.push("Valid customization price is required")
    }
    if (!newCustomization.advancePayment.trim() || isNaN(parseFloat(newCustomization.advancePayment)) || parseFloat(newCustomization.advancePayment) < 0) {
      errors.push("Valid advance payment is required")
    }
    
    return errors
  }

  const handleAddCustomization = () => {
    const errors = validateCustomizationForm()
    
    if (errors.length > 0) {
      alert(errors.join("\n"))
      return
    }

    const customization = {
      id: Math.max(...customizations.map(c => c.id)) + 1,
      ...newCustomization,
      estimatedDays: parseInt(newCustomization.estimatedDays),
      customizationPrice: parseFloat(newCustomization.customizationPrice),
      advancePayment: parseFloat(newCustomization.advancePayment),
      status: "pending",
      orderDate: new Date(),
      completionDate: new Date(Date.now() + parseInt(newCustomization.estimatedDays) * 24 * 60 * 60 * 1000),
    }

    setCustomizations([...customizations, customization])
    setNewCustomization({
      customerName: "",
      customerPhone: "",
      baseProduct: "",
      customizationType: "embroidery",
      description: "",
      estimatedDays: "",
      priority: "normal",
      customizationPrice: "",
      advancePayment: "",
    })
    setCurrentView("customizations")
    alert(t.customizationAdded)
  }

  const updateCustomizationStatus = (id, newStatus) => {
    setCustomizations(customizations.map(c => 
      c.id === id ? { ...c, status: newStatus } : c
    ))
  }

  // Priority color mapping
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "urgent": return "bg-red-100 text-red-800 border-red-200"
      case "high": return "bg-orange-100 text-orange-800 border-orange-200"
      case "normal": return "bg-blue-100 text-blue-800 border-blue-200"
      case "low": return "bg-gray-100 text-gray-800 border-gray-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "inProgress": return "bg-blue-100 text-blue-800 border-blue-200"
      case "completed": return "bg-green-100 text-green-800 border-green-200"
      case "delivered": return "bg-purple-100 text-purple-800 border-purple-200"
      default: return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  // Language Toggle Component
  const LanguageToggle = () => (
    <div className="flex items-center justify-center mb-6">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-3">
        <div className="flex items-center space-x-3">
          <Globe className="text-indigo-600" size={20} />
          <span className="font-semibold text-gray-700">{t.language}:</span>
          <div className="flex bg-gray-100 rounded-xl p-1">
            <button
              onClick={() => setCurrentLanguage("hi")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentLanguage === "hi" ? "bg-indigo-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.hindi}
            </button>
            <button
              onClick={() => setCurrentLanguage("en")}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                currentLanguage === "en" ? "bg-indigo-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-200"
              }`}
            >
              {t.english}
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // Navigation Component
  const Navigation = () => (
    <div className="flex justify-center mb-8">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-white/20 p-2">
        <div className="flex space-x-2">
          <button
            onClick={() => setCurrentView("dashboard")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
              currentView === "dashboard" ? "bg-indigo-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Store size={20} />
            <span>{t.dashboard}</span>
          </button>
          <button
            onClick={() => setCurrentView("customizations")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
              currentView === "customizations" ? "bg-indigo-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Palette size={20} />
            <span>{t.customizations}</span>
            {activeCustomizations > 0 && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 ml-1">
                {activeCustomizations}
              </span>
            )}
          </button>
          <button
            onClick={() => setCurrentView("queue")}
            className={`px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center space-x-2 ${
              currentView === "queue" ? "bg-indigo-500 text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <Users size={20} />
            <span>{t.queue}</span>
            {waitingCustomers > 0 && (
              <span className="bg-orange-500 text-white text-xs rounded-full px-2 py-1 ml-1">
                {waitingCustomers}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  )

  // Enhanced Dashboard View
  const DashboardView = () => (
    <div className="space-y-8">
      <LanguageToggle />
      <Navigation />

      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white rounded-3xl shadow-2xl">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative p-8 md:p-12">
          <div className="flex items-center space-x-4 mb-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
              <Store className="text-white" size={32} />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2">{t.shopName}</h1>
              <h2 className="text-xl md:text-2xl opacity-90 font-light">{t.shopSubtitle}</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-blue-100" size={28} />
          </div>
          <div className="text-3xl font-bold mb-1">{totalProducts}</div>
          <div className="text-blue-100 font-medium">{t.totalProducts}</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="text-emerald-100" size={28} />
          </div>
          <div className="text-3xl font-bold mb-1">{totalStock}</div>
          <div className="text-emerald-100 font-medium">{t.totalStock}</div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="text-amber-100" size={28} />
          </div>
          <div className="text-3xl font-bold mb-1">₹{todaysSales.toLocaleString()}</div>
          <div className="text-amber-100 font-medium">{t.todaysSales}</div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <AlertCircle className="text-red-100" size={28} />
          </div>
          <div className="text-3xl font-bold mb-1">{lowStockItems.length}</div>
          <div className="text-red-100 font-medium">{t.lowStock}</div>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <Palette className="text-purple-100" size={28} />
          </div>
          <div className="text-3xl font-bold mb-1">{activeCustomizations}</div>
          <div className="text-purple-100 font-medium">{t.activeCustomizations}</div>
        </div>

        <div className="bg-gradient-to-br from-teal-500 to-teal-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <Users className="text-teal-100" size={28} />
          </div>
          <div className="text-3xl font-bold mb-1">{waitingCustomers}</div>
          <div className="text-teal-100 font-medium">{t.waitingCustomers}</div>
        </div>
      </div>

      {/* Alerts Section */}
      <div className="grid lg:grid-cols-2 gap-6">
        {/* Low Stock Alert */}
        {lowStockItems.length > 0 && (
          <div className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-400 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-red-100 rounded-full p-2 mr-3">
                <AlertCircle className="text-red-500" size={24} />
              </div>
              <h3 className="text-red-800 font-bold text-lg">{t.stockRunningLow}</h3>
            </div>
            <div className="grid gap-2">
              {lowStockItems.map((item) => (
                <div key={item.id} className="bg-white/60 rounded-lg p-3 flex justify-between items-center">
                  <span className="font-medium text-red-700">{item.name}</span>
                  <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-bold">
                    {t.onlyLeft} {item.currentStock} {t.left}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Overdue Customizations Alert */}
        {overdueCustomizations.length > 0 && (
          <div className="bg-gradient-to-r from-orange-50 to-red-50 border-l-4 border-orange-400 rounded-2xl p-6 shadow-lg">
            <div className="flex items-center mb-4">
              <div className="bg-orange-100 rounded-full p-2 mr-3">
                <Clock className="text-orange-500" size={24} />
              </div>
              <h3 className="text-orange-800 font-bold text-lg">{t.customizationOverdue}</h3>
            </div>
            <div className="grid gap-2">
              {overdueCustomizations.map((order) => (
                <div key={order.id} className="bg-white/60 rounded-lg p-3 flex justify-between items-center">
                  <div>
                    <span className="font-medium text-orange-700">{order.customerName}</span>
                    <div className="text-sm text-orange-600">{order.baseProduct}</div>
                  </div>
                  <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-bold">
                    {Math.ceil((new Date() - order.completionDate) / (1000 * 60 * 60 * 24))} days late
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() => setCurrentView("addProduct")}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
        >
          <Plus size={24} />
          <span>{t.newProduct}</span>
        </button>
        <button
          onClick={() => setCurrentView("addCustomization")}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
        >
          <Palette size={24} />
          <span>{t.newCustomization}</span>
        </button>
      </div>

      {/* Product List */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <Package className="mr-3 text-indigo-600" size={28} />
            {t.productList}
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {products.map((product) => (
            <div key={product.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h4 className="font-bold text-xl text-gray-800">{product.name}</h4>
                    <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="flex items-center space-x-2">
                      <div
                        className={`w-3 h-3 rounded-full ${product.currentStock <= product.minStock ? "bg-red-400" : "bg-emerald-400"}`}
                      ></div>
                      <span
                        className={`font-bold ${product.currentStock <= product.minStock ? "text-red-600" : "text-emerald-600"}`}
                      >
                        {t.stock} {product.currentStock}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-blue-600">
                      <IndianRupee size={16} />
                      <span className="font-semibold">{product.buyingPrice}</span>
                      <span className="text-gray-500 text-sm">Buy</span>
                    </div>
                    <div className="flex items-center space-x-1 text-purple-600">
                      <IndianRupee size={16} />
                      <span className="font-semibold">{product.sellingPrice}</span>
                      <span className="text-gray-500 text-sm">Sell</span>
                    </div>
                    <div className="flex items-center space-x-1 text-orange-600">
                      <span className="font-semibold">{product.totalSold}</span>
                      <span className="text-gray-500 text-sm">Sold</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedProduct(product)
                    setCurrentView("product")
                  }}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  <Eye size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Customizations View
  const CustomizationsView = () => (
    <div className="space-y-8">
      <LanguageToggle />
      <Navigation />

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          <Palette className="mr-3 text-purple-600" size={32} />
          {t.customizations}
        </h2>
        <button
          onClick={() => setCurrentView("addCustomization")}
          className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>{t.newCustomization}</span>
        </button>
      </div>

      {/* Customization Cards */}
      <div className="grid lg:grid-cols-2 gap-6">
        {customizations.map((order) => (
          <div key={order.id} className="bg-white rounded-3xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-1">{order.customerName}</h3>
                <div className="flex items-center space-x-2 text-gray-600">
                  <Phone size={16} />
                  <span>{order.customerPhone}</span>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getPriorityColor(order.priority)}`}>
                  {t[order.priority]}
                </span>
                <span className={`px-3 py-1 rounded-full text-sm font-bold border ${getStatusColor(order.status)}`}>
                  {t[order.status]}
                </span>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-4 mb-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">{t.baseProduct}:</span>
                  <div className="font-semibold">{order.baseProduct}</div>
                </div>
                <div>
                  <span className="text-gray-600">{t.customizationType}:</span>
                  <div className="font-semibold capitalize">{t[order.customizationType]}</div>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <span className="text-gray-600 text-sm">{t.description}:</span>
              <p className="font-medium text-gray-800">{order.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div className="bg-blue-50 rounded-lg p-3">
                <span className="text-blue-600">{t.customizationPrice}:</span>
                <div className="flex items-center space-x-1 font-bold text-blue-700">
                  <IndianRupee size={16} />
                  <span>{order.customizationPrice}</span>
                </div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <span className="text-green-600">{t.advancePayment}:</span>
                <div className="flex items-center space-x-1 font-bold text-green-700">
                  <IndianRupee size={16} />
                  <span>{order.advancePayment}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
              <div className="flex items-center space-x-1">
                <Calendar size={16} />
                <span>Due: {order.completionDate.toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock size={16} />
                <span>{order.estimatedDays} days</span>
              </div>
            </div>

            {/* Status Update Buttons */}
            <div className="flex space-x-2">
              {order.status === "pending" && (
                <button
                  onClick={() => updateCustomizationStatus(order.id, "inProgress")}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Start Work
                </button>
              )}
              {order.status === "inProgress" && (
                <button
                  onClick={() => updateCustomizationStatus(order.id, "completed")}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Mark Complete
                </button>
              )}
              {order.status === "completed" && (
                <button
                  onClick={() => updateCustomizationStatus(order.id, "delivered")}
                  className="flex-1 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg font-medium transition-colors duration-200"
                >
                  Mark Delivered
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  // Queue Management View
  const QueueView = () => (
    <div className="space-y-8">
      <LanguageToggle />
      <Navigation />

      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          <Users className="mr-3 text-teal-600" size={32} />
          {t.queueManagement}
        </h2>
      </div>

      {/* Currently Serving */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-3xl shadow-xl p-8">
        <div className="flex items-center space-x-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-3">
            <User className="text-white" size={32} />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">{t.currentlyServing}</h3>
            <p className="text-xl opacity-90">{currentlyServing}</p>
          </div>
        </div>
      </div>

      {/* Waiting Queue */}
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 border-b">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center">
            <Clock className="mr-3 text-teal-600" size={28} />
            {t.nextInQueue} ({waitingCustomers} {t.totalWaiting})
          </h3>
        </div>
        <div className="divide-y divide-gray-100">
          {waitingQueue.map((customer, index) => (
            <div key={customer.id} className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200">
              <div className="flex items-center space-x-4">
                <div className="bg-teal-100 text-teal-600 rounded-full w-10 h-10 flex items-center justify-center font-bold">
                  {index + 1}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-800">{customer.customerName}</h4>
                  <p className="text-gray-600">{customer.service}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-teal-600">{customer.estimatedTime} min</div>
                <div className="text-sm text-gray-500">{t.estimatedTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  // Product Detail View
  const ProductView = () => (
    <div className="space-y-8">
      <LanguageToggle />

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>{t.back}</span>
        </button>
        <h2 className="text-3xl font-bold text-gray-800">{selectedProduct?.name}</h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Product Info */}
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-gray-800 flex items-center">
            <Package className="mr-3 text-indigo-600" size={28} />
            {t.productInfo}
          </h3>
          <div className="space-y-6">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-600">{t.category}</span>
              <span className="font-bold text-gray-800 bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                {selectedProduct?.category}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-600">{t.currentStock}</span>
              <span
                className={`font-bold text-2xl ${selectedProduct?.currentStock <= selectedProduct?.minStock ? "text-red-600" : "text-emerald-600"}`}
              >
                {selectedProduct?.currentStock}
              </span>
            </div>
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-xl">
              <span className="font-medium text-gray-600">{t.minStock}</span>
              <span className="font-bold text-gray-800">{selectedProduct?.minStock}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
              <span className="font-medium text-blue-600">{t.buyingPrice}</span>
              <div className="flex items-center space-x-1 font-bold text-blue-700">
                <IndianRupee size={20} />
                <span className="text-xl">{selectedProduct?.buyingPrice}</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
              <span className="font-medium text-purple-600">{t.sellingPrice}</span>
              <div className="flex items-center space-x-1 font-bold text-purple-700">
                <IndianRupee size={20} />
                <span className="text-xl">{selectedProduct?.sellingPrice}</span>
              </div>
            </div>
            <div className="flex justify-between items-center p-4 bg-orange-50 rounded-xl">
              <span className="font-medium text-orange-600">{t.soldToday}</span>
              <span className="font-bold text-orange-700 text-xl">{selectedProduct?.totalSold}</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-emerald-50 rounded-xl">
              <span className="font-medium text-emerald-600">{t.todaysProfit}</span>
              <div className="flex items-center space-x-1 font-bold text-emerald-700">
                <IndianRupee size={20} />
                <span className="text-xl">
                  {(
                    (selectedProduct?.sellingPrice - selectedProduct?.buyingPrice) *
                    selectedProduct?.totalSold
                  ).toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-6">
          {/* Sale Section */}
          <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-emerald-800 flex items-center">
              <ShoppingCart className="mr-3" size={28} />
              {t.makeSale}
            </h3>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <button
                onClick={() => setSaleQuantity(Math.max(1, saleQuantity - 1))}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Minus size={20} />
              </button>
              <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                <span className="text-3xl font-bold text-gray-800">{saleQuantity}</span>
              </div>
              <button
                onClick={() => setSaleQuantity(saleQuantity + 1)}
                className="bg-emerald-500 hover:bg-emerald-600 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={() => {
                if (handleSale(selectedProduct.id, saleQuantity)) {
                  alert(
                    `${saleQuantity} ${selectedProduct.name} ${t.soldMessage}${(saleQuantity * selectedProduct.sellingPrice).toLocaleString()}`,
                  )
                } else {
                  alert(t.notEnoughStock)
                }
              }}
              className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              disabled={selectedProduct?.currentStock < saleQuantity}
            >
              <IndianRupee size={20} />
              <span>
                {t.sell}
                {(saleQuantity * (selectedProduct?.sellingPrice || 0)).toLocaleString()}
              </span>
            </button>
          </div>

          {/* Stock Addition Section */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold mb-6 text-blue-800 flex items-center">
              <Plus className="mr-3" size={28} />
              {t.addStock}
            </h3>
            <div className="flex items-center justify-center space-x-6 mb-6">
              <button
                onClick={() => setStockQuantity(Math.max(1, stockQuantity - 1))}
                className="bg-red-500 hover:bg-red-600 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Minus size={20} />
              </button>
              <div className="bg-white rounded-2xl px-6 py-4 shadow-md">
                <span className="text-3xl font-bold text-gray-800">{stockQuantity}</span>
              </div>
              <button
                onClick={() => setStockQuantity(stockQuantity + 1)}
                className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200"
              >
                <Plus size={20} />
              </button>
            </div>
            <button
              onClick={() => {
                handleAddStock(selectedProduct.id, stockQuantity)
                alert(`${stockQuantity} ${selectedProduct.name} ${t.stockAdded}`)
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2"
            >
              <Plus size={20} />
              <span>
                {t.addStockButton} (+{stockQuantity})
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  // FIXED: Enhanced Add Product View with Fixed Input Handling
  const AddProductView = () => (
    <div className="space-y-8">
      <LanguageToggle />

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView("dashboard")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>{t.back}</span>
        </button>
        <h2 className="text-3xl font-bold text-gray-800">{t.addNewProduct}</h2>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          <div>
            <label className="block text-lg font-bold mb-3 text-gray-700">{t.productName} *</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => handleNewProductChange('name', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
              placeholder={t.productNamePlaceholder}
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-3 text-gray-700">{t.categoryLabel} *</label>
            <select
              value={newProduct.category}
              onChange={(e) => handleNewProductChange('category', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.initialStock} *</label>
              <input
                type="number"
                value={newProduct.currentStock}
                onChange={(e) => handleNewProductChange('currentStock', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                placeholder="10"
                min="0"
                step="1"
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.minStockLabel} *</label>
              <input
                type="number"
                value={newProduct.minStock}
                onChange={(e) => handleNewProductChange('minStock', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                placeholder="5"
                min="0"
                step="1"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.buyingPriceLabel} *</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={newProduct.buyingPrice}
                  onChange={(e) => handleNewProductChange('buyingPrice', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                  placeholder="800"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.sellingPriceLabel} *</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={newProduct.sellingPrice}
                  onChange={(e) => handleNewProductChange('sellingPrice', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200 outline-none"
                  placeholder="1200"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleAddNewProduct}
            className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
          >
            <Plus size={24} />
            <span>{t.addProductButton}</span>
          </button>
        </div>
      </div>
    </div>
  )

  // FIXED: Add Customization View with Fixed Input Handling
  const AddCustomizationView = () => (
    <div className="space-y-8">
      <LanguageToggle />

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView("customizations")}
          className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all duration-200 flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span>{t.back}</span>
        </button>
        <h2 className="text-3xl font-bold text-gray-800 flex items-center">
          <Palette className="mr-3 text-purple-600" size={32} />
          {t.newCustomization}
        </h2>
      </div>

      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Customer Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.customerName} *</label>
              <input
                type="text"
                value={newCustomization.customerName}
                onChange={(e) => handleNewCustomizationChange('customerName', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.customerPhone} *</label>
              <input
                type="tel"
                value={newCustomization.customerPhone}
                onChange={(e) => handleNewCustomizationChange('customerPhone', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
                placeholder="10-digit phone number"
                maxLength="10"
              />
            </div>
          </div>

          {/* Product & Customization Details */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.baseProduct} *</label>
              <select
                value={newCustomization.baseProduct}
                onChange={(e) => handleNewCustomizationChange('baseProduct', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
              >
                <option value="">Select base product</option>
                {products.map((product) => (
                  <option key={product.id} value={product.name}>
                    {product.name} (Stock: {product.currentStock})
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.customizationType} *</label>
              <select
                value={newCustomization.customizationType}
                onChange={(e) => handleNewCustomizationChange('customizationType', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
              >
                {customizationTypes.map((type) => (
                  <option key={type} value={type}>
                    {t[type]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-lg font-bold mb-3 text-gray-700">{t.description} *</label>
            <textarea
              value={newCustomization.description}
              onChange={(e) => handleNewCustomizationChange('description', e.target.value)}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none resize-none"
              rows="4"
              placeholder="Detailed description of customization requirements..."
            />
          </div>

          {/* Timeline & Priority */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.estimatedDays} *</label>
              <input
                type="number"
                value={newCustomization.estimatedDays}
                onChange={(e) => handleNewCustomizationChange('estimatedDays', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
                placeholder="5"
                min="1"
                step="1"
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.priority} *</label>
              <select
                value={newCustomization.priority}
                onChange={(e) => handleNewCustomizationChange('priority', e.target.value)}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
              >
                {priorities.map((priority) => (
                  <option key={priority} value={priority}>
                    {t[priority]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Pricing */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.customizationPrice} *</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={newCustomization.customizationPrice}
                  onChange={(e) => handleNewCustomizationChange('customizationPrice', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
                  placeholder="500"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.advancePayment} *</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={newCustomization.advancePayment}
                  onChange={(e) => handleNewCustomizationChange('advancePayment', e.target.value)}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
                  placeholder="250"
                  min="0"
                  step="0.01"
                />
              </div>
            </div>
          </div>

          <button
            onClick={handleAddCustomization}
            className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-5 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
          >
            <Palette size={24} />
            <span>{t.submitCustomization}</span>
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Routing */}
        {currentView === "dashboard" && <DashboardView />}
        {currentView === "product" && <ProductView />}
        {currentView === "addProduct" && <AddProductView />}
        {currentView === "customizations" && <CustomizationsView />}
        {currentView === "addCustomization" && <AddCustomizationView />}
        {currentView === "queue" && <QueueView />}
      </div>
    </div>
  )
}

export default LakshmiTextilesSystem
