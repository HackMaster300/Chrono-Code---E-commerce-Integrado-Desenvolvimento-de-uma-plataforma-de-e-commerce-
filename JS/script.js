
// Shopping Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count display
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }

    // Update cart display
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            cartSubtotal.textContent = '$0.00';
            cartTotal.textContent = '$0.00';
            return;
        }

        emptyCartMessage.classList.add('hidden');

        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item flex items-start py-4 border-b border-gray-200';
            cartItem.innerHTML = `
                        <div class="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between">
                                <h4 class="font-medium text-gray-900">${item.name}</h4>
                                <button class="remove-item text-gray-500 hover:text-red-500" data-index="${index}">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <div class="flex items-center">
                                    <button class="decrease-quantity text-gray-500 hover:text-gray-700 px-2" data-index="${index}">
                                        <i class="fas fa-minus text-xs"></i>
                                    </button>
                                    <span class="quantity mx-2">${item.quantity}</span>
                                    <button class="increase-quantity text-gray-500 hover:text-gray-700 px-2" data-index="${index}">
                                        <i class="fas fa-plus text-xs"></i>
                                    </button>
                                </div>
                                <span class="font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
                            </div>
                        </div>
                    `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;

        // Add event listeners to the new buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');

            // Check if item already exists in cart
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    image,
                    quantity: 1
                });
            }

            saveCart();
            updateCartCount();
            updateCartDisplay();

            // Show the cart modal
            cartModal.classList.add('active');

            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check mr-1"></i> Added';
            this.classList.add('bg-green-600');
            this.classList.remove('bg-blue-600', 'hover:bg-blue-700');

            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('bg-green-600');
                this.classList.add('bg-blue-600', 'hover:bg-blue-700');
            }, 2000);
        });
    });

    // Cart modal functionality
    cartButton.addEventListener('click', function (e) {
        e.preventDefault();
        cartModal.classList.add('active');
    });

    closeCart.addEventListener('click', function () {
        cartModal.classList.remove('active');
    });

    // Close modal when clicking outside
    cartModal.addEventListener('click', function (e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Initialize cart display
    updateCartCount();
    updateCartDisplay();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileLoginButton = document.getElementById('mobile-login-button');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMobileMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileMenuOverlay.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileLoginButton.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        loginModal.classList.add('active');
    });

    // Login Modal Functionality
    const userButton = document.getElementById('user-button');
    const loginModal = document.getElementById('login-modal');
    const closeLogin = document.getElementById('close-login');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');

    userButton.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.classList.add('active');
    });

    closeLogin.addEventListener('click', function () {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', function (e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    loginTab.addEventListener('click', function () {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerTab.addEventListener('click', function () {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Simulated login functionality
    loginButton.addEventListener('click', function () {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            alert('Login successful! Welcome back.');
            loginModal.classList.remove('active');
        } else {
            alert('Please enter both email and password.');
        }
    });

    // Simulated registration functionality
    registerButton.addEventListener('click', function () {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const acceptTerms = document.getElementById('accept-terms').checked;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!acceptTerms) {
            alert('You must accept the terms and conditions.');
            return;
        }

        alert('Registration successful! Welcome to Chrono & Code.');
        loginModal.classList.remove('active');
    });

    // Search functionality
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function () {
        searchContainer.classList.toggle('expanded');
        if (searchContainer.classList.contains('expanded')) {
            searchInput.focus();
        }
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const watchItems = document.querySelectorAll('.watch-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            watchItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove a classe 'active' de todos os links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});


// Shopping Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count display
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }

    // Update cart display
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            cartSubtotal.textContent = '$0.00';
            cartTotal.textContent = '$0.00';
            return;
        }

        emptyCartMessage.classList.add('hidden');

        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item flex items-start py-4 border-b border-gray-200';
            cartItem.innerHTML = `
          <div class="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
          </div>
          <div class="ml-4 flex-grow">
            <div class="flex justify-between">
              <h4 class="font-medium text-gray-900">${item.name}</h4>
              <button class="remove-item text-gray-500 hover:text-red-500" data-index="${index}">
                <i class="fas fa-times"></i>
              </button>
            </div>
            <div class="flex justify-between items-center mt-2">
              <div class="flex items-center">
                <button class="decrease-quantity text-gray-500 hover:text-gray-700 px-2" data-index="${index}">
                  <i class="fas fa-minus text-xs"></i>
                </button>
                <span class="quantity mx-2">${item.quantity}</span>
                <button class="increase-quantity text-gray-500 hover:text-gray-700 px-2" data-index="${index}">
                  <i class="fas fa-plus text-xs"></i>
                </button>
              </div>
              <span class="font-medium">$${(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
        `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartSubtotal.textContent = `$${subtotal.toFixed(2)}`;
        cartTotal.textContent = `$${subtotal.toFixed(2)}`;

        // Add event listeners to the new buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');

            // Check if item already exists in cart
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    image,
                    quantity: 1
                });
            }

            saveCart();
            updateCartCount();
            updateCartDisplay();

            // Show the cart modal
            cartModal.classList.add('active');

            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check mr-1"></i> Added';
            this.classList.add('bg-green-600');
            this.classList.remove('bg-blue-600', 'bg-amber-600', 'hover:bg-blue-700', 'hover:bg-amber-700');

            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('bg-green-600');
                if (this.classList.contains('add-to-cart')) {
                    if (this.classList.contains('bg-amber-600')) {
                        this.classList.add('bg-amber-600', 'hover:bg-amber-700');
                    } else {
                        this.classList.add('bg-blue-600', 'hover:bg-blue-700');
                    }
                }
            }, 2000);
        });
    });

    // Cart modal functionality
    cartButton.addEventListener('click', function (e) {
        e.preventDefault();
        cartModal.classList.add('active');
    });

    closeCart.addEventListener('click', function () {
        cartModal.classList.remove('active');
    });

    // Close modal when clicking outside
    cartModal.addEventListener('click', function (e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Initialize cart display
    updateCartCount();
    updateCartDisplay();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileLoginButton = document.getElementById('mobile-login-button');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMobileMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileMenuOverlay.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileLoginButton.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        loginModal.classList.add('active');
    });

    // Login Modal Functionality
    const userButton = document.getElementById('user-button');
    const loginModal = document.getElementById('login-modal');
    const closeLogin = document.getElementById('close-login');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');

    userButton.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.classList.add('active');
    });

    closeLogin.addEventListener('click', function () {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', function (e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    loginTab.addEventListener('click', function () {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerTab.addEventListener('click', function () {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Simulated login functionality
    loginButton.addEventListener('click', function () {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            // In a real app, you would make an API call here
            alert('Login successful! Welcome back.');
            loginModal.classList.remove('active');
        } else {
            alert('Please enter both email and password.');
        }
    });

    // Simulated registration functionality
    registerButton.addEventListener('click', function () {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const acceptTerms = document.getElementById('accept-terms').checked;

        if (!name || !email || !password || !confirmPassword) {
            alert('Please fill in all fields.');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match.');
            return;
        }

        if (!acceptTerms) {
            alert('You must accept the terms and conditions.');
            return;
        }

        // In a real app, you would make an API call here
        alert('Registration successful! Welcome to Chrono & Code.');
        loginModal.classList.remove('active');
    });

    // Simulated OAuth functionality
    document.querySelectorAll('.oauth-btn').forEach(button => {
        button.addEventListener('click', function () {
            const provider = this.classList.contains('google') ? 'Google' :
                this.classList.contains('facebook') ? 'Facebook' : 'Apple';
            alert(`In a real app, you would be redirected to ${provider} OAuth login.`);
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {

            // Remove a classe 'active' de todos os links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});



// Shopping Cart Functionality
document.addEventListener('DOMContentLoaded', function () {
    // Initialize cart
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = document.getElementById('cart-count');
    const cartButton = document.getElementById('cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCart = document.getElementById('close-cart');
    const cartItemsContainer = document.getElementById('cart-items');
    const emptyCartMessage = document.getElementById('empty-cart-message');
    const cartSubtotal = document.getElementById('cart-subtotal');
    const cartTotal = document.getElementById('cart-total');

    // Update cart count display
    function updateCartCount() {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartCount.textContent = totalItems;
        if (totalItems > 0) {
            cartCount.classList.remove('hidden');
        } else {
            cartCount.classList.add('hidden');
        }
    }

    // Update cart display
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            emptyCartMessage.classList.remove('hidden');
            cartSubtotal.textContent = 'R$0,00';
            cartTotal.textContent = 'R$0,00';
            return;
        }

        emptyCartMessage.classList.add('hidden');

        let subtotal = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            subtotal += itemTotal;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item flex items-start py-4 border-b border-gray-200';
            cartItem.innerHTML = `
                        <div class="flex-shrink-0 w-16 h-16 rounded-md overflow-hidden">
                            <img src="${item.image}" alt="${item.name}" class="w-full h-full object-cover">
                        </div>
                        <div class="ml-4 flex-grow">
                            <div class="flex justify-between">
                                <h4 class="font-medium text-gray-900">${item.name}</h4>
                                <button class="remove-item text-gray-500 hover:text-red-500" data-index="${index}">
                                    <i class="fas fa-times"></i>
                                </button>
                            </div>
                            <div class="flex justify-between items-center mt-2">
                                <div class="flex items-center">
                                    <button class="decrease-quantity text-gray-500 hover:text-gray-700 px-2" data-index="${index}">
                                        <i class="fas fa-minus text-xs"></i>
                                    </button>
                                    <span class="quantity mx-2">${item.quantity}</span>
                                    <button class="increase-quantity text-gray-500 hover:text-gray-700 px-2" data-index="${index}">
                                        <i class="fas fa-plus text-xs"></i>
                                    </button>
                                </div>
                                <span class="font-medium">R$${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
                            </div>
                        </div>
                    `;
            cartItemsContainer.appendChild(cartItem);
        });

        cartSubtotal.textContent = `R$${subtotal.toFixed(2).replace('.', ',')}`;
        cartTotal.textContent = `R$${subtotal.toFixed(2).replace('.', ',')}`;

        // Add event listeners to the new buttons
        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                cart.splice(index, 1);
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });

        document.querySelectorAll('.decrease-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                } else {
                    cart.splice(index, 1);
                }
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });

        document.querySelectorAll('.increase-quantity').forEach(button => {
            button.addEventListener('click', function () {
                const index = parseInt(this.getAttribute('data-index'));
                cart[index].quantity++;
                saveCart();
                updateCartDisplay();
                updateCartCount();
            });
        });
    }

    // Save cart to localStorage
    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    // Add to cart functionality
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', function () {
            const id = this.getAttribute('data-id');
            const name = this.getAttribute('data-name');
            const price = parseFloat(this.getAttribute('data-price'));
            const image = this.getAttribute('data-image');

            // Check if item already exists in cart
            const existingItem = cart.find(item => item.id === id);

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    id,
                    name,
                    price,
                    image,
                    quantity: 1
                });
            }

            saveCart();
            updateCartCount();
            updateCartDisplay();

            // Show the cart modal
            cartModal.classList.add('active');

            // Change button text temporarily
            const originalText = this.innerHTML;
            this.innerHTML = '<i class="fas fa-check mr-1"></i> Adicionado';
            this.classList.add('bg-green-600');
            this.classList.remove('bg-purple-600', 'hover:bg-purple-700');

            setTimeout(() => {
                this.innerHTML = originalText;
                this.classList.remove('bg-green-600');
                this.classList.add('bg-purple-600', 'hover:bg-purple-700');
            }, 2000);
        });
    });

    // Cart modal functionality
    cartButton.addEventListener('click', function (e) {
        e.preventDefault();
        cartModal.classList.add('active');
    });

    closeCart.addEventListener('click', function () {
        cartModal.classList.remove('active');
    });

    // Close modal when clicking outside
    cartModal.addEventListener('click', function (e) {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
    });

    // Initialize cart display
    updateCartCount();
    updateCartDisplay();

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuOverlay = document.getElementById('mobile-menu-overlay');
    const closeMobileMenu = document.getElementById('close-mobile-menu');
    const mobileLoginButton = document.getElementById('mobile-login-button');

    mobileMenuButton.addEventListener('click', function () {
        mobileMenu.classList.add('active');
        mobileMenuOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMobileMenu.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileMenuOverlay.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });

    mobileLoginButton.addEventListener('click', function () {
        mobileMenu.classList.remove('active');
        mobileMenuOverlay.classList.remove('active');
        document.body.style.overflow = '';
        loginModal.classList.add('active');
    });

    // Login Modal Functionality
    const userButton = document.getElementById('user-button');
    const loginModal = document.getElementById('login-modal');
    const closeLogin = document.getElementById('close-login');
    const loginTab = document.getElementById('login-tab');
    const registerTab = document.getElementById('register-tab');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginButton = document.getElementById('login-button');
    const registerButton = document.getElementById('register-button');

    userButton.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.classList.add('active');
    });

    closeLogin.addEventListener('click', function () {
        loginModal.classList.remove('active');
    });

    loginModal.addEventListener('click', function (e) {
        if (e.target === loginModal) {
            loginModal.classList.remove('active');
        }
    });

    loginTab.addEventListener('click', function () {
        loginTab.classList.add('active');
        registerTab.classList.remove('active');
        loginForm.classList.remove('hidden');
        registerForm.classList.add('hidden');
    });

    registerTab.addEventListener('click', function () {
        registerTab.classList.add('active');
        loginTab.classList.remove('active');
        registerForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
    });

    // Simulated login functionality
    loginButton.addEventListener('click', function () {
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        if (email && password) {
            alert('Login realizado com sucesso! Bem-vindo de volta.');
            loginModal.classList.remove('active');
        } else {
            alert('Por favor, insira email e senha.');
        }
    });

    // Simulated registration functionality
    registerButton.addEventListener('click', function () {
        const name = document.getElementById('register-name').value;
        const email = document.getElementById('register-email').value;
        const password = document.getElementById('register-password').value;
        const confirmPassword = document.getElementById('register-confirm-password').value;
        const acceptTerms = document.getElementById('accept-terms').checked;

        if (!name || !email || !password || !confirmPassword) {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        if (password !== confirmPassword) {
            alert('As senhas não coincidem.');
            return;
        }

        if (!acceptTerms) {
            alert('Você deve aceitar os termos e condições.');
            return;
        }

        alert('Cadastro realizado com sucesso! Bem-vindo à Leitura & Imaginação.');
        loginModal.classList.remove('active');
    });

    // Search functionality
    const searchContainer = document.querySelector('.search-container');
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.querySelector('.search-input');

    searchIcon.addEventListener('click', function () {
        searchContainer.classList.toggle('expanded');
        if (searchContainer.classList.contains('expanded')) {
            searchInput.focus();
        }
    });

    // Filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    const bookItems = document.querySelectorAll('.book-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked button
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');

            bookItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    // Navigation active state
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {


            // Remove a classe 'active' de todos os links
            navLinks.forEach(nav => nav.classList.remove('active'));

            // Adiciona a classe 'active' ao link clicado
            this.classList.add('active');
        });
    });
});
