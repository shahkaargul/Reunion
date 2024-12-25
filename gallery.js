// Sample data structure for gallery items
const galleryData = {
  2000: [
    { src: "path/to/image2.jpg", caption: "Batch 2000" },
    { src: "path/to/image3.jpg", caption: "Batch 2000" },
    // Add more images for 2000
    ],
  2001: [
    { src: "path/to/image3.jpg", caption: "Batch 2001" },
    { src: "path/to/image3.jpg", caption: "Batch 2001" },
    // Add more images for 2001
  ],
  2002: [
    { src: "path/to/image3.jpg", caption: "Batch 2002" },
    { src: "path/to/image4.jpg", caption: "Batch 2002" },
    // Add more images for 2002
  ],
  2003: [
    { src: "path/to/image3.jpg", caption: "Batch 2003" },
    { src: "path/to/image4.jpg", caption: "Batch 2003" },
    // Add more images for 2003
  ],
  2004: [
    { src: "path/to/image3.jpg", caption: "Batch 2004" },
    { src: "path/to/image4.jpg", caption: "Batch 2004" },
    // Add more images for 2004
  ],
  2005: [
    { src: "path/to/image3.jpg", caption: "Batch 2005" },
    { src: "path/to/image4.jpg", caption: "Batch 2005" },
    // Add more images for 2005
  ],
  2006: [
    { src: "path/to/image3.jpg", caption: "Batch 2006" },
    { src: "path/to/image4.jpg", caption: "Batch 2006" },
    // Add more images for 2006
  ],
  2007: [
    { src: "path/to/image3.jpg", caption: "Batch 2007" },
    { src: "path/to/image4.jpg", caption: "Batch 2007" },
    // Add more images for 2007
  ],
  2008: [
    { src: "path/to/image3.jpg", caption: "Batch 2008" },
    { src: "path/to/image4.jpg", caption: "Batch 2008" },
    // Add more images for 2008
  ],
  2009: [
    { src: "path/to/image3.jpg", caption: "Batch 2009" },
    { src: "path/to/image4.jpg", caption: "Batch 2009" },
    // Add more images for 2009
  ],
  2010: [
    { src: "path/to/image3.jpg", caption: "Batch 2010" },
    { src: "path/to/image4.jpg", caption: "Batch 2010" },
    // Add more images for 2010
  ],
  2011: [
    { src: "path/to/image3.jpg", caption: "Batch 2011" },
    { src: "path/to/image4.jpg", caption: "Batch 2011" },
    // Add more images for 2011
  ],
  2012: [
    { src: "path/to/image3.jpg", caption: "Batch 2012" },
    { src: "path/to/image4.jpg", caption: "Batch 2012" },
    // Add more images for 2012
  ],
  2013: [
    { src: "path/to/image3.jpg", caption: "Batch 2013" },
    { src: "path/to/image4.jpg", caption: "Batch 2013" },
    // Add more images for 2013
  ],
  2014: [
    { src: "path/to/image3.jpg", caption: "Batch 2014" },
    { src: "path/to/image4.jpg", caption: "Batch 2014" },
    // Add more images for 2014
  ],
  2015: [
    { src: "path/to/image3.jpg", caption: "Batch 2015" },
    { src: "path/to/image4.jpg", caption: "Batch 2015" },
    // Add more images for 2015
  ],
  2016: [
    { src: "path/to/image3.jpg", caption: "Batch 2016" },
    { src: "path/to/image4.jpg", caption: "Batch 2016" },
    // Add more images for 2016
  ],
  2017: [
    { src: "path/to/image3.jpg", caption: "Batch 2017" },
    { src: "path/to/image4.jpg", caption: "Batch 2017" },
    // Add more images for 2017
  ],
  2018: [
    { src: "path/to/image3.jpg", caption: "Batch 2018" },
    { src: "path/to/image4.jpg", caption: "Batch 2018" },
    // Add more images for 2017
  ],
  2019: [
    { src: "path/to/image3.jpg", caption: "Batch 2019" },
    { src: "path/to/image4.jpg", caption: "Batch 2019" },
    // Add more images for 2018
  ],
  2020: [
    { src: "path/to/image3.jpg", caption: "Batch 2020" },
    { src: "path/to/image4.jpg", caption: "Batch 2020" },
    // Add more images for 2019
  ],
  2021: [
    { src: "path/to/image3.jpg", caption: "Batch 2021" },
    { src: "path/to/image4.jpg", caption: "Batch 2021" },
    // Add more images for 2020
  ],
  2022: [
    { src: "./Batch 2022/batch20221.jpg", caption: "Batch 2022" },
    { src: "path/to/image4.jpg", caption: "Batch 2022" },
    // Add more images for 2021
  ],
  2023: [
    { src: "path/to/image3.jpg", caption: "Batch 2023" },
    { src: "path/to/image4.jpg", caption: "Batch 2023" },
    // Add more images for 2022
  ],
  2024: [
    { src: "./Batch 2024/batch20241.png", caption: "Batch 2024" },
    { src: "./Batch 2024/batch20242.jpg", caption: "Batch 2024" },
    // Add more images for 2023
  ],
  
};

// Generate filter squares
function createFilters() {
  const filterContainer = document.querySelector('.gallery-filters');
  
  // Clear existing filters except "All"
  const allFilter = filterContainer.querySelector('[data-filter="all"]');
  filterContainer.innerHTML = '';
  filterContainer.appendChild(allFilter);
  
  // Add year filters
  Object.keys(galleryData).forEach(year => {
    const filterSquare = document.createElement('div');
    filterSquare.className = 'filter-square';
    filterSquare.setAttribute('data-filter', year);
    
    filterSquare.innerHTML = `
      <div class="square-content">
        <span class="year">${year}</span>
        <span class="batch-text">Batch</span>
      </div>
    `;
    
    filterContainer.appendChild(filterSquare);
  });
}

// Generate gallery items
function createGalleryItems(filter = 'all') {
  const galleryGrid = document.querySelector('.gallery-grid');
  galleryGrid.innerHTML = '';
  
  if (filter === 'all') {
    // Show all images
    Object.values(galleryData).flat().forEach(item => {
      addGalleryItem(item, galleryGrid);
    });
  } else {
    // Show filtered images
    galleryData[filter].forEach(item => {
      addGalleryItem(item, galleryGrid);
    });
  }
}

// Helper function to create individual gallery items
function addGalleryItem(item, container) {
  const galleryItem = document.createElement('div');
  galleryItem.className = 'gallery-item';
  
  galleryItem.innerHTML = `
    <a href="${item.src}" data-fancybox="gallery" data-caption="${item.caption}" class="gallery-link">
      <img src="${item.src}" alt="${item.caption}" class="gallery-image">
      <div class="image-overlay">
        <span class="image-caption">${item.caption}</span>
      </div>
    </a>
  `;
  
  // Add animation on hover
  galleryItem.addEventListener('mouseenter', () => {
    galleryItem.classList.add('hover');
  });
  
  galleryItem.addEventListener('mouseleave', () => {
    galleryItem.classList.remove('hover');
  });
  
  container.appendChild(galleryItem);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
  createFilters();
  createGalleryItems();
  
  // Filter click handling
  document.querySelector('.gallery-filters').addEventListener('click', (e) => {
    const filterSquare = e.target.closest('.filter-square');
    if (!filterSquare) return;
    
    // Update active state
    document.querySelectorAll('.filter-square').forEach(square => {
      square.classList.remove('active');
    });
    filterSquare.classList.add('active');
    
    // Filter gallery
    const filter = filterSquare.getAttribute('data-filter');
    createGalleryItems(filter);
  });
  
  // Initialize Fancybox
  Fancybox.bind('[data-fancybox="gallery"]', {
    // Fancybox options here
  });
  
  // Add animation on scroll
  const observerOptions = {
    threshold: 0.2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe gallery items as they're created
  function observeGalleryItems() {
    document.querySelectorAll('.gallery-item').forEach(item => {
      observer.observe(item);
    });
  }

  // Update createGalleryItems to call observeGalleryItems
  const originalCreateGalleryItems = createGalleryItems;
  createGalleryItems = function(filter = 'all') {
    originalCreateGalleryItems(filter);
    observeGalleryItems();
  };
}); 