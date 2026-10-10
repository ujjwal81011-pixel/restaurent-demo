/**
 * ==========================================================================
 * [RESTAURANT NAME] - MODERN INTERACTIVE JAVASCRIPT
 * Fine Dining Gastronomy Experience
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // ------------------------------------------------------------------------
  // 1. Menu Dataset
  // ------------------------------------------------------------------------
  const menuData = [
    {
      id: 'm1',
      name: '[HOKKAIDO SCALLOP CRUDO]',
      category: 'starters',
      price: 28,
      tags: ['chef', 'gluten-free'],
      description: 'Hand-dived scallops, finger lime caviar, cold-pressed white shoyu emulsion, and sea fennel.',
      pairing: 'Grand Cru Chablis 2021',
      allergens: 'Shellfish, Citrus',
      story: 'Sourced directly from sustainable Japanese fisheries, flash chilled and sliced within hours of landing.'
    },
    {
      id: 'm2',
      name: '[BLACK TRUFFLE BURRATA]',
      category: 'starters',
      price: 26,
      tags: ['vegetarian', 'gluten-free'],
      description: 'Heirloom roasted baby carrots, smoked wildflower honey drizzle, and roasted pistachio crumble.',
      pairing: 'Sancerre Sauvignon Blanc 2022',
      allergens: 'Dairy, Tree Nuts',
      story: 'Handcrafted burrata from regional artisanal dairies paired with Umbrian winter truffles.'
    },
    {
      id: 'm3',
      name: '[CHARRED MEDITERRANEAN OCTOPUS]',
      category: 'starters',
      price: 31,
      tags: ['gluten-free'],
      description: 'Slow-braised then wood-charred, smoked pimentón aioli, marble potatoes, and pickled shallots.',
      pairing: 'Albariño Rías Baixas 2023',
      allergens: 'Molluscs, Egg',
      story: 'Tenderized over 4 hours with fragrant bay leaf court-bouillon before kiss of binchotan charcoal.'
    },
    {
      id: 'm4',
      name: '[PAN-SEARED CHILEAN SEABASS]',
      category: 'mains',
      price: 54,
      tags: ['chef', 'gluten-free'],
      description: 'Glazed with sweet white miso, morel mushroom dashi, pickled lotus root, and herb shiso oil.',
      pairing: 'Meursault Premier Cru 2020',
      allergens: 'Fish, Soy',
      story: 'Sustainable MSC-certified Patagonian toothfish seared in cast iron to achieve crackling skin.'
    },
    {
      id: 'm5',
      name: '[WILD CHANTERELLE RISOTTO]',
      category: 'mains',
      price: 38,
      tags: ['vegetarian', 'gluten-free'],
      description: 'Acquerello 7-year aged Carnaroli rice, 36-month Parmigiano wafer, and shaved black Perigord truffle.',
      pairing: 'Barolo DOCG 2018',
      allergens: 'Dairy',
      story: 'Foraged chanterelles simmered with rich golden vegetable stock and aged botanical butter.'
    },
    {
      id: 'm6',
      name: '[CANARD DE BARBARIE DUCK BREAST]',
      category: 'mains',
      price: 49,
      tags: ['chef'],
      description: '14-day dry-aged duck breast, tart Morello cherry reduction, parsnip silk, and lavender blossom.',
      pairing: 'Gevrey-Chambertin Burgundy 2019',
      allergens: 'Dairy',
      story: 'Slow roasted on the bone to render crisp amber skin and tender rosewood interior.'
    },
    {
      id: 'm7',
      name: '[A5 MIYAZAKI WAGYU TENDERLOIN]',
      category: 'steaks',
      price: 95,
      tags: ['chef', 'gluten-free'],
      description: '6oz supreme cut, bone marrow black truffle jus, edible 24k gold leaf, and smoked Maldon salt.',
      pairing: 'Château Margaux 2015',
      allergens: 'None',
      story: 'Certified 100% full-blood Japanese black cattle with marble score 11, seared over Japanese white charcoal.'
    },
    {
      id: 'm8',
      name: '[PRIME BISON RIBEYE]',
      category: 'steaks',
      price: 74,
      tags: ['gluten-free'],
      description: 'Pasture-raised 12oz ribeye, charred spring allium butter, fermented black garlic reduction.',
      pairing: 'Napa Valley Cabernet Sauvignon 2017',
      allergens: 'Dairy',
      story: 'Grass-fed native American bison aged for 35 days for deep earthy complexity.'
    },
    {
      id: 'm9',
      name: '[HEARTH ROASTED CAULIFLOWER STEAK]',
      category: 'steaks',
      price: 32,
      tags: ['vegetarian', 'gluten-free'],
      description: 'Tahini silk, pomegranate molasses glaze, spiced dukkah crunch, and fresh mint leaves.',
      pairing: 'Côtes du Rhône Blanc 2021',
      allergens: 'Sesame, Nuts',
      story: 'Whole head basted with herbed brown butter and slow-roasted on the woodfire hearth.'
    },
    {
      id: 'm10',
      name: '[CHOCOLATE NOIR & RASPBERRY ENTREMET]',
      category: 'desserts',
      price: 22,
      tags: ['chef', 'vegetarian'],
      description: '72% Grand Cru Valrhona dome, hot wild raspberry coulis pour, gold flakes, and edible violas.',
      pairing: 'Taylor Fladgate 20-Year Tawny Port',
      allergens: 'Dairy, Gluten',
      story: 'An architectural dessert combining crunchy cacao praline with velvety dark chocolate mousse.'
    },
    {
      id: 'm11',
      name: '[DECONSTRUCTED YUZU TART]',
      category: 'desserts',
      price: 19,
      tags: ['vegetarian'],
      description: 'Torched Italian meringue, calamansi lime sorbet, matcha moss biscuit, and crystallized shiso.',
      pairing: 'Château d\'Yquem Sauternes 2016',
      allergens: 'Dairy, Egg, Gluten',
      story: 'A refreshingly bright symphony of Japanese citrus balancing sweet caramel meringue.'
    },
    {
      id: 'm12',
      name: '[THE SMOKED AMBER OLD FASHIONED]',
      category: 'cocktails',
      price: 24,
      tags: ['chef'],
      description: 'Japanese Yamazaki single malt, smoking cedar smoke cloche, orange bitters, 24k gold garnish.',
      pairing: 'Artisanal Charcuterie & Chocolate Truffles',
      allergens: 'Alcohol',
      story: 'Prepared tableside beneath a bell jar infused with aromatic cedarwood smoke.'
    },
    {
      id: 'm13',
      name: '[MIDNIGHT BOTANICAL GIN ELIXIR]',
      category: 'cocktails',
      price: 22,
      tags: ['gluten-free'],
      description: 'Butterfly pea flower infused artisanal gin, clarified lemon, elderflower liqueur, lavender mist.',
      pairing: 'Chilled Scallop Crudo & Oysters',
      allergens: 'Alcohol',
      story: 'Transforms in color from midnight sapphire to vibrant amethyst as botanical tonic is poured.'
    }
  ];

  // ------------------------------------------------------------------------
  // 2. DOM Elements
  // ------------------------------------------------------------------------
  const siteHeader = document.getElementById('siteHeader');
  const topAnnouncement = document.getElementById('topAnnouncement');
  const closeAnnouncementBtn = document.getElementById('closeAnnouncement');

  // Mobile Drawer
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
  const closeMobileDrawerBtn = document.getElementById('closeMobileDrawer');
  const drawerLinks = document.querySelectorAll('.drawer-link');
  const drawerReserveBtn = document.getElementById('drawerReserveBtn');

  // Menu Elements
  const categoryTabs = document.getElementById('categoryTabs');
  const menuSearchInput = document.getElementById('menuSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const dietCheckboxes = document.querySelectorAll('.diet-checkbox');
  const menuItemsGrid = document.getElementById('menuItemsGrid');

  // Dish Quick View Modal
  const dishModal = document.getElementById('dishModal');
  const modalDishBody = document.getElementById('modalDishBody');
  const closeDishModalBtn = document.getElementById('closeDishModal');
  const dishModalBackdrop = document.getElementById('dishModalBackdrop');

  // Tasting Drawer
  const tastingDrawer = document.getElementById('tastingDrawer');
  const openTastingDrawerBtn = document.getElementById('openTastingDrawer');
  const closeTastingDrawerBtn = document.getElementById('closeTastingDrawer');
  const tastingBackdrop = document.getElementById('tastingBackdrop');
  const tastingItemsList = document.getElementById('tastingItemsList');
  const tastingCountBadge = document.getElementById('tastingCount');
  const tastingCourseCount = document.getElementById('tastingCourseCount');
  const tastingEstimatedTotal = document.getElementById('tastingEstimatedTotal');
  const tastingProceedResBtn = document.getElementById('tastingProceedResBtn');

  // Quick Bar & Reservation Form
  const quickDateInput = document.getElementById('quickDate');
  const quickGuestsSelect = document.getElementById('quickGuests');
  const quickTimeSelect = document.getElementById('quickTime');
  const quickCheckBtn = document.getElementById('quickCheckBtn');

  const reservationForm = document.getElementById('reservationForm');
  const resDateInput = document.getElementById('resDate');
  const resGuestsInput = document.getElementById('resGuests');
  const resSeatingSelect = document.getElementById('resSeating');
  const guestMinusBtn = document.getElementById('guestMinus');
  const guestPlusBtn = document.getElementById('guestPlus');
  const timeChips = document.querySelectorAll('.time-chip');
  const selectedTimeInput = document.getElementById('selectedTimeInput');

  // Gallery Lightbox
  const galleryTriggers = document.querySelectorAll('.gallery-trigger');
  const galleryLightbox = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxTitle = document.getElementById('lightboxTitle');
  const lightboxDesc = document.getElementById('lightboxDesc');
  const closeLightboxBtn = document.getElementById('closeLightbox');
  const lightboxBackdrop = document.getElementById('lightboxBackdrop');

  // Reviews Slider
  const reviewCards = document.querySelectorAll('.review-card');
  const reviewDots = document.querySelectorAll('#reviewDots .dot-btn');
  const prevReviewBtn = document.getElementById('prevReviewBtn');
  const nextReviewBtn = document.getElementById('nextReviewBtn');

  // FAQ
  const faqItems = document.querySelectorAll('.faq-item');

  // Newsletter Form
  const newsletterForm = document.getElementById('newsletterForm');
  const newsletterEmail = document.getElementById('newsletterEmail');

  // Customizer Widget
  const customizerToggle = document.getElementById('customizerToggle');
  const customizerCard = document.getElementById('customizerCard');
  const closeCustomizer = document.getElementById('closeCustomizer');
  const inputRestaurantName = document.getElementById('inputRestaurantName');
  const inputChefName = document.getElementById('inputChefName');
  const inputCityName = document.getElementById('inputCityName');
  const applyCustomizerBtn = document.getElementById('applyCustomizerBtn');
  const resetCustomizerBtn = document.getElementById('resetCustomizerBtn');

  // Toasts
  const toastContainer = document.getElementById('toastContainer');

  // Tasting state (persistent in session)
  let tastingCart = JSON.parse(sessionStorage.getItem('tastingCart') || '[]');

  // ------------------------------------------------------------------------
  // 3. Header & Sticky Scroll Effect
  // ------------------------------------------------------------------------
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  }, { passive: true });

  if (closeAnnouncementBtn) {
    closeAnnouncementBtn.addEventListener('click', () => {
      topAnnouncement.style.opacity = '0';
      topAnnouncement.style.height = '0';
      setTimeout(() => topAnnouncement.remove(), 350);
    });
  }

  // ------------------------------------------------------------------------
  // 4. Mobile Navigation Drawer
  // ------------------------------------------------------------------------
  const toggleMobileMenu = (open) => {
    const shouldOpen = open !== undefined ? open : !mobileDrawer.classList.contains('active');
    mobileDrawer.classList.toggle('active', shouldOpen);
    mobileDrawerOverlay.classList.toggle('active', shouldOpen);
    mobileMenuBtn.classList.toggle('active', shouldOpen);
    mobileMenuBtn.setAttribute('aria-expanded', shouldOpen ? 'true' : 'false');
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => toggleMobileMenu());
  }
  if (closeMobileDrawerBtn) {
    closeMobileDrawerBtn.addEventListener('click', () => toggleMobileMenu(false));
  }
  if (mobileDrawerOverlay) {
    mobileDrawerOverlay.addEventListener('click', () => toggleMobileMenu(false));
  }
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });
  if (drawerReserveBtn) {
    drawerReserveBtn.addEventListener('click', () => toggleMobileMenu(false));
  }

  // ------------------------------------------------------------------------
  // 5. Menu Rendering & Filtering
  // ------------------------------------------------------------------------
  let currentCategory = 'all';
  let searchQuery = '';
  let activeDietary = [];

  const renderMenu = () => {
    const filtered = menuData.filter(item => {
      // Category match
      const matchCat = currentCategory === 'all' || item.category === currentCategory;

      // Search match
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        (item.story && item.story.toLowerCase().includes(q));

      // Dietary match (every checked filter must be present in item tags)
      const matchDiet = activeDietary.every(d => item.tags.includes(d));

      return matchCat && matchSearch && matchDiet;
    });

    if (filtered.length === 0) {
      menuItemsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <div style="font-size: 2.5rem; margin-bottom: 0.75rem;">🍽️</div>
          <h4 style="font-family: var(--font-serif); font-size: 1.3rem; color: #fff; margin-bottom: 0.5rem;">No Dishes Found</h4>
          <p style="font-size: 0.9rem;">Try loosening your search filters or select "All Courses".</p>
        </div>
      `;
      return;
    }

    menuItemsGrid.innerHTML = filtered.map(item => {
      const isAdded = tastingCart.some(c => c.id === item.id);
      const isChef = item.tags.includes('chef');
      const isVeg = item.tags.includes('vegetarian');
      const isGf = item.tags.includes('gluten-free');

      return `
        <article class="menu-card" data-id="${item.id}">
          <div class="card-top-row">
            <div class="dish-header-info">
              <div class="dish-tags">
                ${isChef ? '<span class="tag-badge chef">★ Chef Signature</span>' : ''}
                ${isVeg ? '<span class="tag-badge diet">🌱 Veg</span>' : ''}
                ${isGf ? '<span class="tag-badge diet">🌾 GF</span>' : ''}
              </div>
              <h3 class="dish-name">${item.name}</h3>
            </div>
            <div class="dish-price">$${item.price}</div>
          </div>

          <p class="dish-description">${item.description}</p>

          <div class="card-action-row">
            <button type="button" class="view-details-btn" data-action="details" data-id="${item.id}">
              <span>Story &amp; Pairing</span>
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </button>
            <button type="button" class="add-tasting-btn ${isAdded ? 'added' : ''}" data-action="toggle-tasting" data-id="${item.id}">
              <span>${isAdded ? '✓ Selected' : '+ Add to Tasting'}</span>
            </button>
          </div>
        </article>
      `;
    }).join('');
  };

  // Category Tabs Click
  if (categoryTabs) {
    categoryTabs.addEventListener('click', (e) => {
      const btn = e.target.closest('.pill-btn');
      if (!btn) return;
      categoryTabs.querySelectorAll('.pill-btn').forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  }

  // Search input
  if (menuSearchInput) {
    menuSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      clearSearchBtn.style.display = searchQuery ? 'block' : 'none';
      renderMenu();
    });
  }

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      menuSearchInput.value = '';
      searchQuery = '';
      clearSearchBtn.style.display = 'none';
      renderMenu();
    });
  }

  // Dietary checkboxes
  dietCheckboxes.forEach(cb => {
    cb.addEventListener('change', () => {
      activeDietary = Array.from(dietCheckboxes)
        .filter(c => c.checked)
        .map(c => c.value);
      renderMenu();
    });
  });

  // Delegate clicks on menu cards
  menuItemsGrid.addEventListener('click', (e) => {
    const detailsBtn = e.target.closest('[data-action="details"]');
    const tastingBtn = e.target.closest('[data-action="toggle-tasting"]');

    if (detailsBtn) {
      const id = detailsBtn.getAttribute('data-id');
      const item = menuData.find(m => m.id === id);
      if (item) openDishModal(item);
    } else if (tastingBtn) {
      const id = tastingBtn.getAttribute('data-id');
      const item = menuData.find(m => m.id === id);
      if (item) toggleTastingItem(item);
    }
  });

  // Initial menu render
  renderMenu();

  // ------------------------------------------------------------------------
  // 6. Dish Quick View Modal
  // ------------------------------------------------------------------------
  const openDishModal = (item) => {
    const isAdded = tastingCart.some(c => c.id === item.id);
    modalDishBody.innerHTML = `
      <div style="margin-bottom: 1.25rem;">
        <span class="section-tag" style="font-size: 0.7rem; margin-bottom: 0.5rem;">DISH REPERTOIRE</span>
        <h3 style="font-family: var(--font-serif); font-size: 1.6rem; color: #fff; margin-bottom: 0.35rem;">
          ${item.name}
        </h3>
        <div style="font-size: 1.3rem; font-family: var(--font-serif); color: var(--gold-warm); font-weight: 700;">
          $${item.price}
        </div>
      </div>

      <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">
        ${item.description}
      </p>

      <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.5rem;">
        <h4 style="font-family: var(--font-serif); font-size: 0.95rem; color: var(--gold-light); margin-bottom: 0.4rem;">
          Provenance &amp; Technique
        </h4>
        <p style="font-size: 0.86rem; color: var(--text-muted); line-height: 1.6;">
          ${item.story || 'Crafted daily by Chef [CHEF NAME] utilizing regenerative seasonal harvests.'}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.75rem;">
        <div style="background: rgba(255,255,255,0.02); padding: 0.9rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.72rem; color: var(--gold-warm); font-weight: 700; text-transform: uppercase;">Sommelier Pairing</div>
          <div style="font-size: 0.85rem; color: #fff; font-weight: 600; margin-top: 0.2rem;">${item.pairing}</div>
        </div>
        <div style="background: rgba(255,255,255,0.02); padding: 0.9rem; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
          <div style="font-size: 0.72rem; color: var(--text-muted); font-weight: 700; text-transform: uppercase;">Allergens</div>
          <div style="font-size: 0.85rem; color: var(--text-secondary); margin-top: 0.2rem;">${item.allergens}</div>
        </div>
      </div>

      <button type="button" class="btn btn-gold btn-full" id="modalToggleTastingBtn" data-id="${item.id}">
        <span>${isAdded ? '✓ In Your Tasting Wishlist' : '+ Add to Evening Tasting Wishlist'}</span>
      </button>
    `;

    dishModal.classList.add('active');
    document.body.style.overflow = 'hidden';

    // Hook modal button
    const modalBtn = document.getElementById('modalToggleTastingBtn');
    if (modalBtn) {
      modalBtn.addEventListener('click', () => {
        toggleTastingItem(item);
        const nowAdded = tastingCart.some(c => c.id === item.id);
        modalBtn.querySelector('span').textContent = nowAdded ? '✓ In Your Tasting Wishlist' : '+ Add to Evening Tasting Wishlist';
      });
    }
  };

  const closeDishModal = () => {
    dishModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeDishModalBtn) closeDishModalBtn.addEventListener('click', closeDishModal);
  if (dishModalBackdrop) dishModalBackdrop.addEventListener('click', closeDishModal);

  // ------------------------------------------------------------------------
  // 7. Tasting Wishlist Drawer Logic
  // ------------------------------------------------------------------------
  const toggleTastingItem = (item) => {
    const idx = tastingCart.findIndex(c => c.id === item.id);
    if (idx >= 0) {
      tastingCart.splice(idx, 1);
      showToast(`Removed "${item.name}" from your tasting wishlist.`);
    } else {
      tastingCart.push(item);
      showToast(`Added "${item.name}" to your tasting wishlist! ✨`);
    }

    sessionStorage.setItem('tastingCart', JSON.stringify(tastingCart));
    updateTastingUI();
    renderMenu(); // Re-render to update card button states
  };

  const updateTastingUI = () => {
    const totalCount = tastingCart.length;
    tastingCountBadge.textContent = totalCount;
    tastingCourseCount.textContent = `${totalCount} Course${totalCount === 1 ? '' : 's'}`;

    const totalEstimate = tastingCart.reduce((sum, item) => sum + item.price, 0);
    tastingEstimatedTotal.textContent = `$${totalEstimate}`;

    if (totalCount === 0) {
      tastingItemsList.innerHTML = `
        <div class="tasting-empty-state">
          <span>🍸</span>
          <h4>Your Wishlist is Empty</h4>
          <p>Browse our A La Carte menu and select dishes you wish to experience.</p>
        </div>
      `;
    } else {
      tastingItemsList.innerHTML = tastingCart.map(item => `
        <div class="tasting-item-row">
          <div class="item-row-info">
            <h5>${item.name}</h5>
            <span>$${item.price} • ${item.category.toUpperCase()}</span>
          </div>
          <button type="button" class="remove-tasting-btn" data-remove-id="${item.id}" aria-label="Remove dish">&times;</button>
        </div>
      `).join('');
    }
  };

  const toggleTastingDrawer = (open) => {
    const shouldOpen = open !== undefined ? open : !tastingDrawer.classList.contains('active');
    tastingDrawer.classList.toggle('active', shouldOpen);
    document.body.style.overflow = shouldOpen ? 'hidden' : '';
  };

  if (openTastingDrawerBtn) {
    openTastingDrawerBtn.addEventListener('click', () => toggleTastingDrawer(true));
  }
  if (closeTastingDrawerBtn) {
    closeTastingDrawerBtn.addEventListener('click', () => toggleTastingDrawer(false));
  }
  if (tastingBackdrop) {
    tastingBackdrop.addEventListener('click', () => toggleTastingDrawer(false));
  }
  if (tastingProceedResBtn) {
    tastingProceedResBtn.addEventListener('click', () => toggleTastingDrawer(false));
  }

  // Remove from tasting inside drawer
  tastingItemsList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('[data-remove-id]');
    if (!removeBtn) return;
    const id = removeBtn.getAttribute('data-remove-id');
    const item = menuData.find(m => m.id === id);
    if (item) toggleTastingItem(item);
  });

  updateTastingUI();

  // ------------------------------------------------------------------------
  // 8. Quick Booking Bar & Table Reservation Form
  // ------------------------------------------------------------------------
  // Preset default date to 3 days from now
  const defaultResDate = new Date();
  defaultResDate.setDate(defaultResDate.getDate() + 3);
  const formattedDate = defaultResDate.toISOString().split('T')[0];

  if (quickDateInput) quickDateInput.value = formattedDate;
  if (resDateInput) {
    resDateInput.value = formattedDate;
    resDateInput.min = new Date().toISOString().split('T')[0];
  }

  // Quick lookup syncs to main form
  if (quickCheckBtn) {
    quickCheckBtn.addEventListener('click', () => {
      if (resDateInput) resDateInput.value = quickDateInput.value;
      if (resGuestsInput) resGuestsInput.value = quickGuestsSelect.value.replace('+', '');
      
      const resSection = document.getElementById('reservations');
      if (resSection) {
        resSection.scrollIntoView({ behavior: 'smooth' });
        showToast('Table availability verified! Please confirm your contact details.');
      }
    });
  }

  // Guest Counter Buttons
  if (guestMinusBtn && guestPlusBtn && resGuestsInput) {
    guestMinusBtn.addEventListener('click', () => {
      let val = parseInt(resGuestsInput.value, 10) || 2;
      if (val > 1) resGuestsInput.value = val - 1;
    });

    guestPlusBtn.addEventListener('click', () => {
      let val = parseInt(resGuestsInput.value, 10) || 2;
      if (val < 12) resGuestsInput.value = val + 1;
      else showToast('For parties larger than 12, please reach out to our Private Dining Concierge.');
    });
  }

  // Time Slot Selection Chips
  timeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      timeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const timeVal = chip.getAttribute('data-time');
      if (selectedTimeInput) selectedTimeInput.value = timeVal;
    });
  });

  // Experiences "Book This Space" Links
  document.querySelectorAll('.exp-book-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const seating = btn.getAttribute('data-seating');
      if (resSeatingSelect && seating) {
        resSeatingSelect.value = seating;
      }
      const resSection = document.getElementById('reservations');
      if (resSection) {
        resSection.scrollIntoView({ behavior: 'smooth' });
        showToast(`Seating preference updated to: "${seating}"`);
      }
    });
  });

  // Reservation Form Submit Handler
  if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('resName').value.trim();
      const phone = document.getElementById('resPhone').value.trim();
      const email = document.getElementById('resEmail').value.trim();
      const date = resDateInput.value;
      const guests = resGuestsInput.value;
      const time = selectedTimeInput.value;
      const seating = resSeatingSelect.value;
      const notes = document.getElementById('resNotes').value.trim();

      if (!name || !phone || !email || !date) {
        showToast('Please complete all required fields.', 'error');
        return;
      }

      // Generate randomized reservation code
      const reservationId = 'RES-' + Math.floor(100000 + Math.random() * 900000);

      // Render Confirmation Popup Modal
      modalDishBody.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0.5rem;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--gold-subtle); border: 2px solid var(--gold-primary); color: var(--gold-primary); font-size: 2rem; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem;">
            ✓
          </div>
          <span class="section-tag" style="margin-bottom: 0.5rem;">CONFIRMED RESERVATION</span>
          <h3 style="font-family: var(--font-serif); font-size: 1.8rem; color: #fff; margin-bottom: 0.5rem;">
            Table Confirmed, ${name}!
          </h3>
          <p style="font-size: 0.92rem; color: var(--text-secondary); max-width: 440px; margin: 0 auto 1.75rem;">
            A confirmation pass has been issued to <strong>${email}</strong> and SMS sent to <strong>${phone}</strong>.
          </p>

          <div style="background: rgba(255,255,255,0.03); border: 1px solid var(--gold-border); border-radius: var(--radius-lg); padding: 1.5rem; text-align: left; margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 0.75rem; margin-bottom: 0.75rem;">
              <span style="font-size: 0.8rem; color: var(--text-muted);">Pass Reference:</span>
              <strong style="font-family: monospace; color: var(--gold-warm); font-size: 1rem;">#${reservationId}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.82rem; color: var(--text-muted);">Venue:</span>
              <strong style="color: #fff; font-size: 0.85rem;" class="hero-brand-target">[RESTAURANT NAME]</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.82rem; color: var(--text-muted);">Date &amp; Time:</span>
              <strong style="color: #fff; font-size: 0.85rem;">${date} at ${time}</strong>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="font-size: 0.82rem; color: var(--text-muted);">Party Size:</span>
              <strong style="color: #fff; font-size: 0.85rem;">${guests} Guests (${seating})</strong>
            </div>
            ${tastingCart.length > 0 ? `
              <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px dashed rgba(255,255,255,0.1); font-size: 0.8rem; color: var(--gold-light);">
                ✦ ${tastingCart.length} courses from your tasting wishlist have been attached to this booking.
              </div>
            ` : ''}
          </div>

          <button type="button" class="btn btn-gold btn-full" id="closeConfirmationBtn">
            Done &amp; Return to Home
          </button>
        </div>
      `;

      dishModal.classList.add('active');
      document.body.style.overflow = 'hidden';

      const doneBtn = document.getElementById('closeConfirmationBtn');
      if (doneBtn) {
        doneBtn.addEventListener('click', () => {
          closeDishModal();
          reservationForm.reset();
          if (resGuestsInput) resGuestsInput.value = 2;
          if (resDateInput) resDateInput.value = formattedDate;
        });
      }

      showToast(`Reservation #${reservationId} verified! We look forward to hosting you.`);
    });
  }

  // ------------------------------------------------------------------------
  // 9. Visual Gallery Lightbox
  // ------------------------------------------------------------------------
  galleryTriggers.forEach(item => {
    item.addEventListener('click', () => {
      const imgUrl = item.getAttribute('data-img');
      const title = item.getAttribute('data-title');
      const caption = item.getAttribute('data-caption');

      lightboxImg.src = imgUrl;
      lightboxTitle.textContent = title;
      lightboxDesc.textContent = caption;

      galleryLightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  const closeLightbox = () => {
    galleryLightbox.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (closeLightboxBtn) closeLightboxBtn.addEventListener('click', closeLightbox);
  if (lightboxBackdrop) lightboxBackdrop.addEventListener('click', closeLightbox);

  // ------------------------------------------------------------------------
  // 10. Reviews Carousel Slider
  // ------------------------------------------------------------------------
  let currentReviewIdx = 0;
  let reviewInterval = null;

  const showReview = (index) => {
    currentReviewIdx = (index + reviewCards.length) % reviewCards.length;
    reviewCards.forEach((card, idx) => {
      card.classList.toggle('active', idx === currentReviewIdx);
    });
    reviewDots.forEach((dot, idx) => {
      dot.classList.toggle('active', idx === currentReviewIdx);
    });
  };

  if (prevReviewBtn) {
    prevReviewBtn.addEventListener('click', () => {
      showReview(currentReviewIdx - 1);
      resetReviewTimer();
    });
  }

  if (nextReviewBtn) {
    nextReviewBtn.addEventListener('click', () => {
      showReview(currentReviewIdx + 1);
      resetReviewTimer();
    });
  }

  reviewDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const idx = parseInt(dot.getAttribute('data-index'), 10);
      showReview(idx);
      resetReviewTimer();
    });
  });

  const startReviewTimer = () => {
    reviewInterval = setInterval(() => {
      showReview(currentReviewIdx + 1);
    }, 6500);
  };

  const resetReviewTimer = () => {
    clearInterval(reviewInterval);
    startReviewTimer();
  };

  startReviewTimer();

  // ------------------------------------------------------------------------
  // 11. FAQ Accordion
  // ------------------------------------------------------------------------
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isActive) {
        item.classList.add('active');
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  // ------------------------------------------------------------------------
  // 12. VIP Newsletter Subscription
  // ------------------------------------------------------------------------
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      if (!email) return;
      showToast(`Welcome to the Private Dining Guild! Invitation sent to ${email}`);
      newsletterEmail.value = '';
    });
  }

  // ------------------------------------------------------------------------
  // 13. Dynamic Placeholder Customizer Widget
  // ------------------------------------------------------------------------
  if (customizerToggle && customizerCard) {
    customizerToggle.addEventListener('click', () => {
      customizerCard.classList.toggle('active');
    });

    if (closeCustomizer) {
      closeCustomizer.addEventListener('click', () => {
        customizerCard.classList.remove('active');
      });
    }

    const applyPlaceholders = (rName, cName, city) => {
      // Replace all restaurant name occurrences
      document.querySelectorAll('.hero-brand-target, .brand-title').forEach(el => {
        el.textContent = rName;
      });
      document.title = `${rName} | Modern Fine Dining & Lounge`;

      // Replace Chef Name
      const chefTargets = document.body.innerHTML;
      document.querySelectorAll('.tag-title, .announcement-text span, cite').forEach(el => {
        if (el.textContent.includes('[CHEF NAME]')) {
          el.textContent = el.textContent.replace(/\[CHEF NAME\]/g, cName);
        }
      });

      showToast(`Design updated with "${rName}"!`);
      customizerCard.classList.remove('active');
    };

    if (applyCustomizerBtn) {
      applyCustomizerBtn.addEventListener('click', () => {
        const rName = inputRestaurantName.value.trim() || '[RESTAURANT NAME]';
        const cName = inputChefName.value.trim() || '[CHEF NAME]';
        const city = inputCityName.value.trim() || '[CITY NAME]';
        applyPlaceholders(rName, cName, city);
      });
    }

    if (resetCustomizerBtn) {
      resetCustomizerBtn.addEventListener('click', () => {
        inputRestaurantName.value = '[RESTAURANT NAME]';
        inputChefName.value = '[CHEF NAME]';
        inputCityName.value = '[CITY NAME]';
        applyPlaceholders('[RESTAURANT NAME]', '[CHEF NAME]', '[CITY NAME]');
      });
    }
  }

  // ------------------------------------------------------------------------
  // 14. Global Keydown (ESC to close modals)
  // ------------------------------------------------------------------------
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDishModal();
      toggleTastingDrawer(false);
      closeLightbox();
      toggleMobileMenu(false);
      if (customizerCard) customizerCard.classList.remove('active');
    }
  });

  // ------------------------------------------------------------------------
  // 15. Toast Notification System
  // ------------------------------------------------------------------------
  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <span class="toast-icon">${type === 'error' ? '⚠️' : '✦'}</span>
      <span>${message}</span>
    `;
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 350);
    }, 4000);
  }
});
