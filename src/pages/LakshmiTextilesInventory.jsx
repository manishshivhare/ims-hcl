"use client"

import { useState } from "react"
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
} from "lucide-react"

const LakshmiTextilesInventory = () => {
  // Language state
  const [currentLanguage, setCurrentLanguage] = useState("hi") // 'hi' for Hindi, 'en' for English

  // Translation object
  const translations = {
    hi: {
      // Header
      shopName: "लक्ष्मी टेक्सटाइल्स",
      shopSubtitle: "Lakshmi Textiles - Inventory System",

      // Navigation
      newProduct: "नया उत्पाद",
      back: "वापस",

      // Dashboard stats
      totalProducts: "कुल उत्पाद",
      totalStock: "कुल स्टॉक",
      todaysSales: "आज की बिक्री",
      lowStock: "कम स्टॉक",

      // Alerts
      stockRunningLow: "स्टॉक खत्म होने वाला है!",
      onlyLeft: "केवल",
      left: "बचे हैं",

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

      // Messages
      productAdded: "नया उत्पाद जोड़ा गया!",
      fillAllFields: "कृपया सभी फील्ड भरें",
      soldMessage: "बेचा गया! कुल: ₹",
      notEnoughStock: "पर्याप्त स्टॉक नहीं है!",
      stockAdded: "स्टॉक में जोड़ा गया!",

      // Language
      language: "भाषा",
      hindi: "हिंदी",
      english: "English",
    },
    en: {
      // Header
      shopName: "Lakshmi Textiles",
      shopSubtitle: "Inventory Management System",

      // Navigation
      newProduct: "New Product",
      back: "Back",

      // Dashboard stats
      totalProducts: "Total Products",
      totalStock: "Total Stock",
      todaysSales: "Today's Sales",
      lowStock: "Low Stock",

      // Alerts
      stockRunningLow: "Stock Running Low!",
      onlyLeft: "Only",
      left: "left",

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

      // Messages
      productAdded: "New product added!",
      fillAllFields: "Please fill all fields",
      soldMessage: "sold! Total: ₹",
      notEnoughStock: "Not enough stock!",
      stockAdded: "added to stock!",

      // Language
      language: "Language",
      hindi: "हिंदी",
      english: "English",
    },
  }

  const t = translations[currentLanguage]

  // Sample textile inventory data
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

  const [currentView, setCurrentView] = useState("dashboard")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [saleQuantity, setSaleQuantity] = useState(1)
  const [stockQuantity, setStockQuantity] = useState(1)

  // New product form
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Sarees",
    currentStock: "",
    buyingPrice: "",
    sellingPrice: "",
    minStock: "",
  })

  const categories = ["Sarees", "Kurta", "Dupatta", "Lehenga", "Blouse", "Fabric"]

  // Calculate totals
  const totalProducts = products.length
  const totalStock = products.reduce((sum, product) => sum + product.currentStock, 0)
  const totalValue = products.reduce((sum, product) => sum + product.currentStock * product.buyingPrice, 0)
  const lowStockItems = products.filter((product) => product.currentStock <= product.minStock)
  const todaysSales = products.reduce((sum, product) => sum + product.totalSold * product.sellingPrice, 0)
  const todaysProfit = products.reduce(
    (sum, product) => sum + product.totalSold * (product.sellingPrice - product.buyingPrice),
    0,
  )

  // Handle sale
  const handleSale = (productId, quantity) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId && product.currentStock >= quantity) {
          return {
            ...product,
            currentStock: product.currentStock - quantity,
            totalSold: product.totalSold + quantity,
          }
        }
        return product
      }),
    )
    setSaleQuantity(1)
  }

  // Handle stock addition
  const handleAddStock = (productId, quantity) => {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            currentStock: product.currentStock + quantity,
            lastStockAdded: quantity,
          }
        }
        return product
      }),
    )
    setStockQuantity(1)
  }

  // Add new product
  const handleAddNewProduct = () => {
    if (
      newProduct.name &&
      newProduct.currentStock &&
      newProduct.buyingPrice &&
      newProduct.sellingPrice &&
      newProduct.minStock
    ) {
      const product = {
        id: Math.max(...products.map((p) => p.id)) + 1,
        ...newProduct,
        currentStock: Number.parseInt(newProduct.currentStock),
        buyingPrice: Number.parseFloat(newProduct.buyingPrice),
        sellingPrice: Number.parseFloat(newProduct.sellingPrice),
        minStock: Number.parseInt(newProduct.minStock),
        totalSold: 0,
        lastStockAdded: Number.parseInt(newProduct.currentStock),
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
    } else {
      alert(t.fillAllFields)
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

  // Dashboard View
  const DashboardView = () => (
    <div className="space-y-8">
      {/* Language Toggle */}
      <LanguageToggle />

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

      {/* Quick Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <Package className="text-blue-100" size={28} />
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-sm font-medium">Items</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">{totalProducts}</div>
          <div className="text-blue-100 font-medium">{t.totalProducts}</div>
        </div>

        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <TrendingUp className="text-emerald-100" size={28} />
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-sm font-medium">Units</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">{totalStock}</div>
          <div className="text-emerald-100 font-medium">{t.totalStock}</div>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-orange-500 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <ShoppingCart className="text-amber-100" size={28} />
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-sm font-medium">₹</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">₹{todaysSales.toLocaleString()}</div>
          <div className="text-amber-100 font-medium">{t.todaysSales}</div>
        </div>

        <div className="bg-gradient-to-br from-red-500 to-red-600 text-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
          <div className="flex items-center justify-between mb-4">
            <AlertCircle className="text-red-100" size={28} />
            <div className="bg-white/20 rounded-full px-3 py-1">
              <span className="text-sm font-medium">Alert</span>
            </div>
          </div>
          <div className="text-3xl font-bold mb-1">{lowStockItems.length}</div>
          <div className="text-red-100 font-medium">{t.lowStock}</div>
        </div>
      </div>

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

      {/* Add Product Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setCurrentView("addProduct")}
          className="bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-3"
        >
          <Plus size={24} />
          <span>{t.newProduct}</span>
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

  // Product Detail View
  const ProductView = () => (
    <div className="space-y-8">
      {/* Language Toggle */}
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
                if (selectedProduct.currentStock >= saleQuantity) {
                  handleSale(selectedProduct.id, saleQuantity)
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

  // Add Product View
  const AddProductView = () => (
    <div className="space-y-8">
      {/* Language Toggle */}
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
            <label className="block text-lg font-bold mb-3 text-gray-700">{t.productName}*</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
              placeholder={t.productNamePlaceholder}
            />
          </div>

          <div>
            <label className="block text-lg font-bold mb-3 text-gray-700">{t.categoryLabel}*</label>
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
              className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
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
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.initialStock}*</label>
              <input
                type="number"
                value={newProduct.currentStock}
                onChange={(e) => setNewProduct({ ...newProduct, currentStock: e.target.value })}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                placeholder="10"
              />
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.minStockLabel}*</label>
              <input
                type="number"
                value={newProduct.minStock}
                onChange={(e) => setNewProduct({ ...newProduct, minStock: e.target.value })}
                className="w-full p-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                placeholder="5"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.buyingPriceLabel}*</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={newProduct.buyingPrice}
                  onChange={(e) => setNewProduct({ ...newProduct, buyingPrice: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="800"
                />
              </div>
            </div>
            <div>
              <label className="block text-lg font-bold mb-3 text-gray-700">{t.sellingPriceLabel}*</label>
              <div className="relative">
                <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="number"
                  value={newProduct.sellingPrice}
                  onChange={(e) => setNewProduct({ ...newProduct, sellingPrice: e.target.value })}
                  className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl text-lg focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition-all duration-200"
                  placeholder="1200"
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 p-4 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Content */}
        {currentView === "dashboard" && <DashboardView />}
        {currentView === "product" && <ProductView />}
        {currentView === "addProduct" && <AddProductView />}
      </div>
    </div>
  )
}

export default LakshmiTextilesInventory
