/* =====================================================
   FarmDirect — script.js
   All interactivity: products, filters, modals,
   dashboards, cart, and scroll animations
   =====================================================

   🖼️ PRODUCT CARD IMAGES — THE MAIN PLACE TO CHANGE:
   Scroll down to the `products` array below.
   Each product object has TWO image fields:

     img:    the main card photo (shown large)
     avatar: the small farmer profile circle

   To use your own images:
     img:    'images/tomatoes.jpg'   ← local file in /images folder
     avatar: 'images/ramesh.jpg'     ← local file in /images folder
   OR use any direct image URL from the web.

   ===================================================== */

/* =====================================================
   PRODUCT DATA
   ---------------------------------------------------
   HOW TO ADD / EDIT A PRODUCT:
   1. Copy one of the existing objects { ... }
   2. Paste it as a new entry in the array
   3. Change the fields:
      - name      : product display name
      - category  : space-separated tags used by the
                    filter buttons (see filter pills
                    in index.html). Allowed tags:
                    vegetables | fruits | grains |
                    organic | seasonal
      - farmer    : farmer's name
      - loc       : location string
      - price     : price in ₹ per kg (number only)
      - qty       : availability text shown on card
      - badge     : 'fresh' | 'organic' | 'limited'
      - badgeTxt  : label shown on the badge
      - img       : main card photo URL or local path
      - avatar    : farmer's small circle photo URL or path

   🖼️ IMAGE CHANGE GUIDE FOR EACH PRODUCT:
   id 1  — Tomatoes         → change 'img' and 'avatar'
   id 2  — Organic Spinach  → change 'img' and 'avatar'
   id 3  — Alphonso Mangoes → change 'img' and 'avatar'
   id 4  — Red Onions       → change 'img' and 'avatar'
   id 5  — Organic Turmeric → change 'img' and 'avatar'
   id 6  — Fresh Coriander  → change 'img' and 'avatar'
   id 7  — Basmati Rice     → change 'img' and 'avatar'
   id 8  — Green Bananas    → change 'img' and 'avatar'
===================================================== */
const products = [
  {
    id: 1,
    name: 'Fresh Tomatoes',
    category: 'vegetables',
    farmer: 'Ramesh Reddy',
    loc: 'Karimnagar, TG',
    price: 20,
    qty: '50 kg available',
    badge: 'fresh',
    badgeTxt: 'Just Harvested',
    // ↓ CHANGE THESE TWO LINES for Tomatoes images
    img:    'https://media.post.rvohealth.io/wp-content/uploads/2020/09/AN313-Tomatoes-732x549-Thumb.jpg',
    avatar: 'https://img.freepik.com/premium-photo/happy-indian-farmer-with-freshly-harvested-onion_822782-1140.jpg?semt=ais_rp_progressive&w=740&q=80'
  },
  {
    id: 2,
    name: 'Organic Spinach',
    category: 'vegetables organic',
    farmer: 'Lakshmi Devi',
    loc: 'Nalgonda, TG',
    price: 35,
    qty: '20 kg available',
    badge: 'organic',
    badgeTxt: 'Certified Organic',
    // ↓ CHANGE THESE TWO LINES for Spinach images
    img:    'https://png.pngtree.com/png-clipart/20250415/original/pngtree-bunch-of-green-spinach-leaves-with-stems-freshly-picked-healthy-png-image_20810806.png',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/038/451/514/small/ai-generated-indian-female-farmer-working-in-her-field-bokeh-style-background-with-generative-ai-photo.jpeg'
  },
  {
    id: 3,
    name: 'Alphonso Mangoes',
    category: 'fruits seasonal',
    farmer: 'Suresh Kumar',
    loc: 'Ratnagiri, MH',
    price: 150,
    qty: '8 kg available',
    badge: 'limited',
    badgeTxt: 'Limited Stock',
    // ↓ CHANGE THESE TWO LINES for Mango images
    img:    'https://ichef.bbci.co.uk/images/ic/1040x1040/p06hk0h6.jpg',
    avatar: 'https://img.freepik.com/free-photo/indian-farmer-sugarcane-field_23-2151996287.jpg?semt=ais_rp_progressive&w=740&q=80'
  },
  {
    id: 4,
    name: 'Red Onions',
    category: 'vegetables',
    farmer: 'Ramesh Reddy',
    loc: 'Karimnagar, TG',
    price: 18,
    qty: '30 kg available',
    badge: 'fresh',
    badgeTxt: 'Just Harvested',
    // ↓ CHANGE THESE TWO LINES for Onion images
    img:    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbSzbkk21KpNb3qgm_ONfT2FrOUfH9HZ0uQ&s',
    avatar: 'https://img.freepik.com/premium-photo/happy-indian-farmer-with-freshly-harvested-onion_822782-1140.jpg?semt=ais_rp_progressive&w=740&q=80'
  },
  {
    id: 5,
    name: 'Organic Turmeric',
    category: 'grains organic seasonal',
    farmer: 'Priya Shankar',
    loc: 'Coimbatore, TN',
    price: 80,
    qty: '15 kg available',
    badge: 'organic',
    badgeTxt: 'Certified Organic',
    // ↓ CHANGE THESE TWO LINES for Turmeric images
    img:    'https://nutrishopnaturals.in/cdn/shop/files/IMG_MonJan0313_12_05GMT_05_302022_1.jpg?v=1691338358',
    avatar: 'https://www.shutterstock.com/image-photo/indian-young-woman-farmer-harvesting-260nw-2611755429.jpg'
  },
  {
    id: 6,
    name: 'Fresh Coriander',
    category: 'vegetables',
    farmer: 'Lakshmi Devi',
    loc: 'Nalgonda, TG',
    price: 60,
    qty: '5 kg available',
    badge: 'limited',
    badgeTxt: 'Limited Stock',
    // ↓ CHANGE THESE TWO LINES for Coriander images
    img:    'https://cpimg.tistatic.com/6036345/b/4/fresh-coriander-leaves.jpg',
    avatar: 'https://static.vecteezy.com/system/resources/thumbnails/038/451/514/small/ai-generated-indian-female-farmer-working-in-her-field-bokeh-style-background-with-generative-ai-photo.jpeg'
  },
  {
    id: 7,
    name: 'Basmati Rice',
    category: 'grains',
    farmer: 'Arjun Patel',
    loc: 'Karnal, Haryana',
    price: 55,
    qty: '100 kg available',
    badge: 'fresh',
    badgeTxt: 'New Harvest',
    // ↓ CHANGE THESE TWO LINES for Basmati Rice images
    img:    'https://chefsmandala.com/wp-content/uploads/2018/02/Basmati-Rice.jpg',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100'
  },
  {
    id: 8,
    name: 'Red Bananas',
    category: 'fruits',
    farmer: 'Priya Shankar',
    loc: 'Coimbatore, TN',
    price: 30,
    qty: '25 kg available',
    badge: 'fresh',
    badgeTxt: 'Just Harvested',
    // ↓ CHANGE THESE TWO LINES for Banana images
    img:    'https://cdn1.healthians.com/blog/wp-content/uploads/2026/02/Red-Banana-benefits-Nutrition-and-side-effects-950x500.webp',
    avatar: 'https://www.shutterstock.com/image-photo/indian-young-woman-farmer-harvesting-260nw-2611755429.jpg'
  }
];

/* =====================================================
   RENDER PRODUCT CARDS
   Builds HTML for each product card and injects
   into #productsGrid in index.html
===================================================== */
function renderProducts(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  const filtered = filter === 'all'
    ? products
    : products.filter(p => p.category.includes(filter));

  grid.innerHTML = filtered.map(p => `
    <div class="product-card">
      <div class="product-img">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <span class="product-badge badge-${p.badge}">${p.badgeTxt}</span>
      </div>
      <div class="product-body">
        <div class="product-farmer">
          <img src="${p.avatar}" class="farmer-avatar" alt="${p.farmer}">
          <div>
            <div class="farmer-name">${p.farmer}</div>
            <div class="farmer-loc">📍 ${p.loc}</div>
          </div>
        </div>
        <div class="product-name">${p.name}</div>
        <div class="product-meta">🌾 ${p.qty} • ⭐ 4.8</div>
        <div class="product-footer">
          <div class="product-price">₹${p.price}<span>/kg</span></div>
          <button class="btn-order" onclick="addToCart('${p.name}')">Add to Cart</button>
        </div>
      </div>
    </div>
  `).join('');
}

/* =====================================================
   FILTER PRODUCTS
   Called by the filter pill buttons in index.html
===================================================== */
function filterProducts(el, filter) {
  document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
  el.classList.add('active');
  renderProducts(filter);
}

/* =====================================================
   CART
===================================================== */
let cartCount = 3; // Starting cart count for demo

function addToCart(name) {
  cartCount++;
  const cartBadge = document.getElementById('cartCount');
  if (cartBadge) cartBadge.textContent = cartCount;

  const btn = event.target;
  btn.textContent = 'Added ✓';
  btn.style.background = 'var(--green-dark)';
  setTimeout(() => {
    btn.textContent = 'Add to Cart';
    btn.style.background = '';
  }, 1500);

  if (cartCount === 4) {
    setTimeout(() => {
      if (confirm(`${name} added to cart!\n\nYou have ${cartCount} items in cart. Ready to checkout?`)) {
        openConsumerDash('cart');
      }
    }, 300);
  }
}

/* =====================================================
   PAGE NAVIGATION
===================================================== */
function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');
  window.scrollTo(0, 0);
}

function scrollToSection(id) {
  showPage('home');
  setTimeout(() => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, 100);
}

/* =====================================================
   MODAL (Login / Sign Up)
===================================================== */
let currentModalType = 'consumer';
let otpSent = false;

function openModal(type) {
  currentModalType = type;
  document.getElementById('modalTitle').textContent =
    type === 'farmer' ? 'Farmer Login' : 'Shop Fresh Produce';
  document.getElementById('modalSub').textContent =
    type === 'farmer'
      ? 'Join 12,400+ verified farmers on FarmDirect'
      : 'Sign in to browse and order fresh produce';
  document.getElementById('modalOverlay').classList.add('open');
  otpSent = false;
  document.getElementById('otpInput').style.display = 'none';
  document.getElementById('modalLoginBtn').textContent = 'Send OTP';
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

function closeModalOutside(e) {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
}

function switchModalTab(tab) {
  document.getElementById('modal-login').style.display  = tab === 'login'  ? 'flex' : 'none';
  document.getElementById('modal-signup').style.display = tab === 'signup' ? 'flex' : 'none';
  document.getElementById('tab-login').classList.toggle('active',  tab === 'login');
  document.getElementById('tab-signup').classList.toggle('active', tab === 'signup');
}

function handleLogin() {
  if (!otpSent) {
    otpSent = true;
    document.getElementById('otpInput').style.display = 'block';
    document.getElementById('modalLoginBtn').textContent = 'Verify OTP & Login';
  } else {
    closeModal();
    if (currentModalType === 'farmer') {
      showPage('farmer');
    } else {
      openConsumerDash('orders');
    }
  }
}

function handleSignup() {
  closeModal();
  if (currentModalType === 'farmer') {
    showPage('farmer');
  } else {
    openConsumerDash('orders');
  }
}

function openConsumerDash(tab) {
  showPage('consumer');
  showConsumerTab(tab || 'orders');
}

/* =====================================================
   FARMER DASHBOARD TABS
===================================================== */
function showDashTab(tab) {
  document.querySelectorAll('[id^="dtab-"]').forEach(el => el.style.display = 'none');
  const el = document.getElementById('dtab-' + tab);
  if (el) el.style.display = 'block';
  // Update sidebar active state
  document.querySelectorAll('.sidebar-nav li a').forEach(a => a.classList.remove('active'));
}

/* =====================================================
   CONSUMER DASHBOARD TABS
===================================================== */
function showConsumerTab(tab) {
  document.querySelectorAll('[id^="ctab-"]').forEach(el => el.style.display = 'none');
  const el = document.getElementById('ctab-' + tab);
  if (el) el.style.display = 'block';
}

/* =====================================================
   SCROLL ANIMATIONS (fade-up class)
===================================================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

/* =====================================================
   NAV SCROLL EFFECT
===================================================== */
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 40);
});

/* =====================================================
   INITIALISE
===================================================== */
renderProducts(); // Load all product cards on page load
