import React, { useState } from 'react';
import { Package, ShoppingCart, TrendingUp, Plus, Minus, Eye, AlertCircle, CheckCircle2, Globe } from 'lucide-react';

const LakshmiTextilesInventory = () => {
  // Language state
  const [currentLanguage, setCurrentLanguage] = useState('hi'); // 'hi' for Hindi, 'en' for English

  // Translation object
  const translations = {
    hi: {
      // Header
      shopName: 'लक्ष्मी टेक्सटाइल्स',
      shopSubtitle: 'Lakshmi Textiles - Inventory System',
      
      // Navigation
      newProduct: 'नया उत्पाद',
      back: '← वापस',
      
      // Dashboard stats
      totalProducts: 'कुल उत्पाद',
      totalStock: 'कुल स्टॉक',
      todaysSales: 'आज की बिक्री',
      lowStock: 'कम स्टॉक',
      
      // Alerts
      stockRunningLow: 'स्टॉक खत्म होने वाला है!',
      onlyLeft: 'केवल',
      left: 'बचे हैं',
      
      // Product list
      productList: 'उत्पाद सूची',
      stock: 'स्टॉक:',
      buying: 'खरीद: ₹',
      selling: 'बेच: ₹',
      sold: 'बेचे गए:',
      
      // Product details
      productInfo: 'उत्पाद जानकारी',
      category: 'श्रेणी:',
      currentStock: 'वर्तमान स्टॉक:',
      minStock: 'न्यूनतम स्टॉक:',
      buyingPrice: 'खरीद मूल्य:',
      sellingPrice: 'बिक्री मूल्य:',
      soldToday: 'आज बेचे गए:',
      todaysProfit: 'आज का मुनाफा:',
      
      // Actions
      makeSale: 'बिक्री करें',
      sell: 'बेचें ₹',
      addStock: 'स्टॉक जोड़ें',
      addStockButton: 'स्टॉक जोड़ें',
      
      // Add product form
      addNewProduct: 'नया उत्पाद जोड़ें',
      productName: 'उत्पाद का नाम',
      productNamePlaceholder: 'जैसे: Cotton Saree - Red',
      categoryLabel: 'श्रेणी',
      initialStock: 'शुरुआती स्टॉक',
      minStockLabel: 'न्यूनतम स्टॉक',
      buyingPriceLabel: 'खरीद मूल्य',
      sellingPriceLabel: 'बिक्री मूल्य',
      addProductButton: 'उत्पाद जोड़ें',
      
      // Messages
      productAdded: 'नया उत्पाद जोड़ा गया!',
      fillAllFields: 'कृपया सभी फील्ड भरें',
      soldMessage: 'बेचा गया! कुल: ₹',
      notEnoughStock: 'पर्याप्त स्टॉक नहीं है!',
      stockAdded: 'स्टॉक में जोड़ा गया!',
      
      // Language
      language: 'भाषा',
      hindi: 'हिंदी',
      english: 'English'
    },
    en: {
      // Header
      shopName: 'Lakshmi Textiles',
      shopSubtitle: 'Inventory Management System',
      
      // Navigation
      newProduct: 'New Product',
      back: '← Back',
      
      // Dashboard stats
      totalProducts: 'Total Products',
      totalStock: 'Total Stock',
      todaysSales: "Today's Sales",
      lowStock: 'Low Stock',
      
      // Alerts
      stockRunningLow: 'Stock Running Low!',
      onlyLeft: 'Only',
      left: 'left',
      
      // Product list
      productList: 'Product List',
      stock: 'Stock:',
      buying: 'Buy: ₹',
      selling: 'Sell: ₹',
      sold: 'Sold:',
      
      // Product details
      productInfo: 'Product Information',
      category: 'Category:',
      currentStock: 'Current Stock:',
      minStock: 'Minimum Stock:',
      buyingPrice: 'Buying Price:',
      sellingPrice: 'Selling Price:',
      soldToday: 'Sold Today:',
      todaysProfit: "Today's Profit:",
      
      // Actions
      makeSale: 'Make Sale',
      sell: 'Sell ₹',
      addStock: 'Add Stock',
      addStockButton: 'Add Stock',
      
      // Add product form
      addNewProduct: 'Add New Product',
      productName: 'Product Name',
      productNamePlaceholder: 'e.g.: Cotton Saree - Red',
      categoryLabel: 'Category',
      initialStock: 'Initial Stock',
      minStockLabel: 'Minimum Stock',
      buyingPriceLabel: 'Buying Price',
      sellingPriceLabel: 'Selling Price',
      addProductButton: 'Add Product',
      
      // Messages
      productAdded: 'New product added!',
      fillAllFields: 'Please fill all fields',
      soldMessage: 'sold! Total: ₹',
      notEnoughStock: 'Not enough stock!',
      stockAdded: 'added to stock!',
      
      // Language
      language: 'Language',
      hindi: 'हिंदी',
      english: 'English'
    }
  };

  const t = translations[currentLanguage];

  // Sample textile inventory data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Cotton Saree - Red',
      category: 'Sarees',
      currentStock: 25,
      buyingPrice: 800,
      sellingPrice: 1200,
      minStock: 10,
      totalSold: 0,
      lastStockAdded: 0
    },
    {
      id: 2,
      name: 'Silk Dupatta - Blue',
      category: 'Dupatta',
      currentStock: 15,
      buyingPrice: 500,
      sellingPrice: 750,
      minStock: 8,
      totalSold: 0,
      lastStockAdded: 0
    },
    {
      id: 3,
      name: 'Cotton Kurta - White',
      category: 'Kurta',
      currentStock: 30,
      buyingPrice: 400,
      sellingPrice: 650,
      minStock: 15,
      totalSold: 0,
      lastStockAdded: 0
    },
    {
      id: 4,
      name: 'Chiffon Saree - Green',
      category: 'Sarees',
      currentStock: 8,
      buyingPrice: 1200,
      sellingPrice: 1800,
      minStock: 12,
      totalSold: 0,
      lastStockAdded: 0
    }
  ]);

  const [currentView, setCurrentView] = useState('dashboard');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [saleQuantity, setSaleQuantity] = useState(1);
  const [stockQuantity, setStockQuantity] = useState(1);
  
  // New product form
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: 'Sarees',
    currentStock: '',
    buyingPrice: '',
    sellingPrice: '',
    minStock: ''
  });

  const categories = ['Sarees', 'Kurta', 'Dupatta', 'Lehenga', 'Blouse', 'Fabric'];

  // Calculate totals
  const totalProducts = products.length;
  const totalStock = products.reduce((sum, product) => sum + product.currentStock, 0);
  const totalValue = products.reduce((sum, product) => sum + (product.currentStock * product.buyingPrice), 0);
  const lowStockItems = products.filter(product => product.currentStock <= product.minStock);
  const todaysSales = products.reduce((sum, product) => sum + (product.totalSold * product.sellingPrice), 0);
  const todaysProfit = products.reduce((sum, product) => sum + (product.totalSold * (product.sellingPrice - product.buyingPrice)), 0);

  // Handle sale
  const handleSale = (productId, quantity) => {
    setProducts(products.map(product => {
      if (product.id === productId && product.currentStock >= quantity) {
        return {
          ...product,
          currentStock: product.currentStock - quantity,
          totalSold: product.totalSold + quantity
        };
      }
      return product;
    }));
    setSaleQuantity(1);
  };

  // Handle stock addition
  const handleAddStock = (productId, quantity) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          currentStock: product.currentStock + quantity,
          lastStockAdded: quantity
        };
      }
      return product;
    }));
    setStockQuantity(1);
  };

  // Add new product
  const handleAddNewProduct = () => {
    if (newProduct.name && newProduct.currentStock && newProduct.buyingPrice && newProduct.sellingPrice && newProduct.minStock) {
      const product = {
        id: Math.max(...products.map(p => p.id)) + 1,
        ...newProduct,
        currentStock: parseInt(newProduct.currentStock),
        buyingPrice: parseFloat(newProduct.buyingPrice),
        sellingPrice: parseFloat(newProduct.sellingPrice),
        minStock: parseInt(newProduct.minStock),
        totalSold: 0,
        lastStockAdded: parseInt(newProduct.currentStock)
      };
      setProducts([...products, product]);
      setNewProduct({
        name: '',
        category: 'Sarees',
        currentStock: '',
        buyingPrice: '',
        sellingPrice: '',
        minStock: ''
      });
      setCurrentView('dashboard');
      alert(t.productAdded);
    } else {
      alert(t.fillAllFields);
    }
  };

  // Language Toggle Component
  const LanguageToggle = () => (
    <div className="flex items-center bg-white rounded-lg shadow-md p-2 mb-4">
      <Globe className="mr-2 text-gray-600" size={20} />
      <span className="mr-3 font-medium text-gray-700">{t.language}:</span>
      <div className="flex bg-gray-100 rounded-lg p-1">
        <button
          onClick={() => setCurrentLanguage('hi')}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentLanguage === 'hi' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          {t.hindi}
        </button>
        <button
          onClick={() => setCurrentLanguage('en')}
          className={`px-3 py-1 rounded-md transition-colors ${
            currentLanguage === 'en' 
              ? 'bg-blue-500 text-white' 
              : 'text-gray-600 hover:bg-gray-200'
          }`}
        >
          {t.english}
        </button>
      </div>
    </div>
  );

  // Dashboard View
  const DashboardView = () => (
    <div className="space-y-6">
      {/* Language Toggle */}
      <LanguageToggle />

      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">{t.shopName}</h1>
        <h2 className="text-xl opacity-90">{t.shopSubtitle}</h2>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-blue-500 text-white p-4 rounded-lg text-center">
          <Package className="mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold">{totalProducts}</div>
          <div className="text-sm">{t.totalProducts}</div>
        </div>
        <div className="bg-green-500 text-white p-4 rounded-lg text-center">
          <TrendingUp className="mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold">{totalStock}</div>
          <div className="text-sm">{t.totalStock}</div>
        </div>
        <div className="bg-orange-500 text-white p-4 rounded-lg text-center">
          <ShoppingCart className="mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold">₹{todaysSales.toLocaleString()}</div>
          <div className="text-sm">{t.todaysSales}</div>
        </div>
        <div className="bg-red-500 text-white p-4 rounded-lg text-center">
          <AlertCircle className="mx-auto mb-2" size={24} />
          <div className="text-2xl font-bold">{lowStockItems.length}</div>
          <div className="text-sm">{t.lowStock}</div>
        </div>
      </div>

      {/* Low Stock Alert */}
      {lowStockItems.length > 0 && (
        <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
          <div className="flex items-center mb-2">
            <AlertCircle className="text-red-400 mr-2" />
            <h3 className="text-red-800 font-bold">{t.stockRunningLow}</h3>
          </div>
          <div className="space-y-1">
            {lowStockItems.map(item => (
              <p key={item.id} className="text-red-700">
                {item.name}: {t.onlyLeft} {item.currentStock} {t.left}
              </p>
            ))}
          </div>
        </div>
      )}

      {/* Product List */}
      <div className="bg-white rounded-lg shadow">
        <div className="p-4 border-b">
          <h3 className="text-xl font-bold">{t.productList}</h3>
        </div>
        <div className="divide-y">
          {products.map(product => (
            <div key={product.id} className="p-4 hover:bg-gray-50">
              <div className="flex justify-between items-center">
                <div className="flex-1">
                  <h4 className="font-semibold text-lg">{product.name}</h4>
                  <p className="text-gray-600">{product.category}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2 text-sm">
                    <span className={`font-medium ${product.currentStock <= product.minStock ? 'text-red-600' : 'text-green-600'}`}>
                      {t.stock} {product.currentStock}
                    </span>
                    <span className="text-blue-600">{t.buying}{product.buyingPrice}</span>
                    <span className="text-purple-600">{t.selling}{product.sellingPrice}</span>
                    <span className="text-orange-600">{t.sold} {product.totalSold}</span>
                  </div>
                </div>
                <button
                  onClick={() => {setSelectedProduct(product); setCurrentView('product');}}
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                  <Eye size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Product Detail View
  const ProductView = () => (
    <div className="space-y-6">
      {/* Language Toggle */}
      <LanguageToggle />

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {t.back}
        </button>
        <h2 className="text-2xl font-bold">{selectedProduct?.name}</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Product Info */}
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-xl font-bold mb-4">{t.productInfo}</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span>{t.category}</span>
              <span className="font-medium">{selectedProduct?.category}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.currentStock}</span>
              <span className={`font-bold text-xl ${selectedProduct?.currentStock <= selectedProduct?.minStock ? 'text-red-600' : 'text-green-600'}`}>
                {selectedProduct?.currentStock}
              </span>
            </div>
            <div className="flex justify-between">
              <span>{t.minStock}</span>
              <span className="font-medium">{selectedProduct?.minStock}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.buyingPrice}</span>
              <span className="font-medium">₹{selectedProduct?.buyingPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.sellingPrice}</span>
              <span className="font-medium">₹{selectedProduct?.sellingPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.soldToday}</span>
              <span className="font-medium">{selectedProduct?.totalSold}</span>
            </div>
            <div className="flex justify-between">
              <span>{t.todaysProfit}</span>
              <span className="font-bold text-green-600">
                ₹{((selectedProduct?.sellingPrice - selectedProduct?.buyingPrice) * selectedProduct?.totalSold).toLocaleString()}
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-4">
          {/* Sale Section */}
          <div className="bg-green-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-green-800">{t.makeSale}</h3>
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setSaleQuantity(Math.max(1, saleQuantity - 1))}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                <Minus size={16} />
              </button>
              <span className="text-2xl font-bold mx-4">{saleQuantity}</span>
              <button
                onClick={() => setSaleQuantity(saleQuantity + 1)}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => {
                if (selectedProduct.currentStock >= saleQuantity) {
                  handleSale(selectedProduct.id, saleQuantity);
                  alert(`${saleQuantity} ${selectedProduct.name} ${t.soldMessage}${(saleQuantity * selectedProduct.sellingPrice).toLocaleString()}`);
                } else {
                  alert(t.notEnoughStock);
                }
              }}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-bold hover:bg-green-700"
              disabled={selectedProduct?.currentStock < saleQuantity}
            >
              {t.sell}{(saleQuantity * (selectedProduct?.sellingPrice || 0)).toLocaleString()}
            </button>
          </div>

          {/* Stock Addition Section */}
          <div className="bg-blue-50 p-6 rounded-lg shadow">
            <h3 className="text-xl font-bold mb-4 text-blue-800">{t.addStock}</h3>
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setStockQuantity(Math.max(1, stockQuantity - 1))}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-600"
              >
                <Minus size={16} />
              </button>
              <span className="text-2xl font-bold mx-4">{stockQuantity}</span>
              <button
                onClick={() => setStockQuantity(stockQuantity + 1)}
                className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              >
                <Plus size={16} />
              </button>
            </div>
            <button
              onClick={() => {
                handleAddStock(selectedProduct.id, stockQuantity);
                alert(`${stockQuantity} ${selectedProduct.name} ${t.stockAdded}`);
              }}
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-bold hover:bg-blue-700"
            >
              {t.addStockButton} (+{stockQuantity})
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Add Product View
  const AddProductView = () => (
    <div className="space-y-6">
      {/* Language Toggle */}
      <LanguageToggle />

      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('dashboard')}
          className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
        >
          {t.back}
        </button>
        <h2 className="text-2xl font-bold">{t.addNewProduct}</h2>
      </div>

      <div className="bg-white p-6 rounded-lg shadow max-w-2xl mx-auto">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold mb-2">{t.productName}*</label>
            <input
              type="text"
              value={newProduct.name}
              onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg"
              placeholder={t.productNamePlaceholder}
            />
          </div>

          <div>
            <label className="block text-sm font-bold mb-2">{t.categoryLabel}*</label>
            <select
              value={newProduct.category}
              onChange={(e) => setNewProduct({...newProduct, category: e.target.value})}
              className="w-full p-3 border border-gray-300 rounded-lg text-lg"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">{t.initialStock}*</label>
              <input
                type="number"
                value={newProduct.currentStock}
                onChange={(e) => setNewProduct({...newProduct, currentStock: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                placeholder="10"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{t.minStockLabel}*</label>
              <input
                type="number"
                value={newProduct.minStock}
                onChange={(e) => setNewProduct({...newProduct, minStock: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                placeholder="5"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-bold mb-2">{t.buyingPriceLabel}*</label>
              <input
                type="number"
                value={newProduct.buyingPrice}
                onChange={(e) => setNewProduct({...newProduct, buyingPrice: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                placeholder="800"
              />
            </div>
            <div>
              <label className="block text-sm font-bold mb-2">{t.sellingPriceLabel}*</label>
              <input
                type="number"
                value={newProduct.sellingPrice}
                onChange={(e) => setNewProduct({...newProduct, sellingPrice: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg text-lg"
                placeholder="1200"
              />
            </div>
          </div>

          <button
            onClick={handleAddNewProduct}
            className="w-full bg-green-600 text-white py-4 rounded-lg font-bold text-lg hover:bg-green-700"
          >
            {t.addProductButton}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Navigation */}
        {currentView === 'dashboard' && (
          <div className="mb-6 flex justify-center">
            <button
              onClick={() => setCurrentView('addProduct')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-green-700 flex items-center"
            >
              <Plus className="mr-2" size={20} />
              {t.newProduct}
            </button>
          </div>
        )}

        {/* Main Content */}
        {currentView === 'dashboard' && <DashboardView />}
        {currentView === 'product' && <ProductView />}
        {currentView === 'addProduct' && <AddProductView />}
      </div>
    </div>
  );
};

export default LakshmiTextilesInventory;