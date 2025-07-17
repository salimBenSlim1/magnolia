<script>

</script>
<template>
    <footer class="bg-black text-white px-6 py-10">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
    <!-- Subscribe -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Exclusive</h2>
      <p class="text-sm mb-1">Subscribe</p>
      <p class="text-xs mb-4">Get 10% off your first order</p>
      <div class="flex border border-white rounded overflow-hidden">
        <input
          type="email"
          placeholder="Enter your email"
          class="bg-black text-white px-3 py-2 w-full outline-none placeholder-white text-sm"
        />
        <button class="bg-white text-black px-3 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
            viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Support -->
    <div class="max-sm:hidden">
      <h2 class="text-lg font-semibold mb-2">Support</h2>
      <p class="text-sm mb-1">111 Bijoy sarani, Dhaka,</p>
      <p class="text-sm mb-1">DH 1515, Bangladesh.</p>
      <p class="text-sm mb-1 mt-3">exclusive@gmail.com</p>
      <p class="text-sm">+88015-88888-9999</p>
    </div>

    <!-- Account -->
    <div class="max-sm:hidden">
      <h2 class="text-lg font-semibold mb-2">Account</h2>
      <ul class="space-y-1 text-sm">
        <li><a href="#">My Account</a></li>
        <li><a href="#">Login / Register</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Wishlist</a></li>
        <li><a href="#">Shop</a></li>
      </ul>
    </div>

    <!-- Quick Link -->
    <div class="max-sm:hidden">
      <h2 class="text-lg font-semibold mb-2">Quick Link</h2>
      <ul class="space-y-1 text-sm">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms Of Use</a></li>
        <li><a href="#">FAQ</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <!-- Download App -->
    <div>
      <h2 class="text-lg font-semibold mb-2">Download App</h2>
      <p class="text-xs mb-3">Save $3 with App New User Only</p>
      <div class="flex space-x-2 mb-3">
        <img src="https://api.qrserver.com/v1/create-qr-code/?size=60x60&data=https://example.com" alt="QR Code" class="h-16 w-16" />
        <div class="flex flex-col space-y-2">
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" class="h-8" />
          <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" class="h-8" />
        </div>
      </div>
      <div class="flex space-x-4 mt-3 text-xl">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  <!-- Bottom Text -->
  <div class="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
    © Copyright Rimel 2022. All right reserved
  </div>
</footer>

</template>