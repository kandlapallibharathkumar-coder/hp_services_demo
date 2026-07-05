/* ==========================================
   DELL SERVICES DATA & LOGIC
   ========================================== */

const DELL_SERVICES = [
    {
        id: "laptop-repair",
        title: "Laptop Repair",
        category: "hardware",
        description: "Comprehensive hardware fixes for Dell Latitude, XPS, Inspiron, and Alienware series laptops.",
        features: ["Hinge adjustments", "Overheating resolution", "Motherboard re-soldering", "Charging port repair"],
        estTime: "1 - 2 Business Days",
        estPrice: "Starts from ₹799",
        icon: `<svg viewBox="0 0 24 24"><path d="M4 6h16v10H4V6zm16 12H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2zm2 2H0v-2h24v2z"/></svg>`
    },
    {
        id: "desktop-repair",
        title: "Desktop Repair",
        category: "hardware",
        description: "Hardware repairs and upgrades for Dell OptiPlex, Inspiron Desktop, and Alienware gaming desktops.",
        features: ["Power Supply (PSU) swap", "GPU installation", "Thermal paste reapplication", "Faulty component diagnosis"],
        estTime: "1 - 3 Business Days",
        estPrice: "Starts from ₹899",
        icon: `<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`
    },
    {
        id: "printer-repair",
        title: "Printer Repair",
        category: "hardware",
        description: "Expert troubleshooting for Dell Print Systems, Multi-Function Printers, and Office printers.",
        features: ["Paper jam fixes", "Toner & cartridge alignment", "Printhead replacement", "Logic board repair"],
        estTime: "1 - 2 Business Days",
        estPrice: "Starts from ₹699",
        icon: `<svg viewBox="0 0 24 24"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/></svg>`
    },
    {
        id: "monitor-repair",
        title: "Monitor Repair",
        category: "hardware",
        description: "Fix display issues on Dell monitors, UltraSharp, and Alienware gaming screens.",
        features: ["Power board repair", "Backlight replacement", "Capacitor fixes", "Color calibration troubleshooting"],
        estTime: "2 - 3 Business Days",
        estPrice: "Starts from ₹999",
        icon: `<svg viewBox="0 0 24 24"><path d="M21 2H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7l-2 3v1h8v-1l-2-3h7c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H3V4h18v12z"/></svg>`
    },
    {
        id: "ssd-upgrade",
        title: "SSD Upgrade",
        category: "upgrades",
        description: "Replace slow HDDs with high-speed NVMe or SATA SSDs to make your Dell boot in under 10 seconds.",
        features: ["5x speed improvements", "Full data migration", "SATA/M.2/NVMe compatible", "Crucial/Samsung/WD parts"],
        estTime: "2 - 4 Hours",
        estPrice: "Starts from ₹2,499",
        icon: `<svg viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 14H9v-2h6v2zm4-4H5V5h14v8z"/></svg>`
    },
    {
        id: "ram-upgrade",
        title: "RAM Upgrade",
        category: "upgrades",
        description: "Boost multitasking capabilities of your Dell laptops and desktops by adding quality RAM modules.",
        features: ["System bottleneck elimination", "DDR3, DDR4 & DDR5 matching", "Compatibility testing", "Crucial & Kingston OEM modules"],
        estTime: "30 Mins - 1 Hour",
        estPrice: "Starts from ₹1,499",
        icon: `<svg viewBox="0 0 24 24"><path d="M17 2H7c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-5 16H9v-2h3v2zm0-4H9v-2h3v2zm0-4H9V8h3v2zm5 8h-3v-2h3v2zm0-4h-3v-2h3v2zm0-4h-3V8h3v2z"/></svg>`
    },
    {
        id: "hard-disk-replacement",
        title: "Hard Disk Replacement",
        category: "upgrades",
        description: "Damaged hard drive replacement with original storage parts and complete backup strategies.",
        features: ["Faulty sectors analysis", "Cloning of intact files", "New HDD installation", "Warranty support backup"],
        estTime: "3 - 5 Hours",
        estPrice: "Starts from ₹1,999",
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
    },
    {
        id: "battery-replacement",
        title: "Battery Replacement",
        category: "hardware",
        description: "Genuine Dell battery upgrades for laptops exhibiting poor health, swelling, or discharging quickly.",
        features: ["100% original Dell parts", "Battery diagnostic safety report", "Safe disposal of old cell", "6-12 Months Warranty"],
        estTime: "1 Hour",
        estPrice: "Starts from ₹2,200",
        icon: `<svg viewBox="0 0 24 24"><path d="M15.67 4H14V2h-4v2H8.33C7.6 4 7 4.6 7 5.33v15.33C7 21.4 7.6 22 8.33 22h7.33c.74 0 1.34-.6 1.34-1.33V5.33C17 4.6 16.4 4 15.67 4z"/></svg>`
    },
    {
        id: "keyboard-repair",
        title: "Keyboard Repair",
        category: "hardware",
        description: "Fixing keys that are stuck, non-responsive, or physical replacement of internal Dell laptop keyboards.",
        features: ["Individual key repair", "Backlight keyboard fitting", "Liquid damage cleanups", "Original membrane standard layout"],
        estTime: "2 - 4 Hours",
        estPrice: "Starts from ₹1,200",
        icon: `<svg viewBox="0 0 24 24"><path d="M20 5H4c-1.1 0-1.99.9-1.99 2L2 17c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-9 3h2v2h-2V8zm0 3h2v2h-2v-2zM8 8h2v2H8V8zm0 3h2v2H8v-2zm-3 0h2v2H5v-2zm0-3h2v2H5V8zm11 8H8v-2h8v2zm1-3h-2v-2h2v2zm0-3h-2V8h2v2zm3 3h-2v-2h2v2zm0-3h-2V8h2v2z"/></svg>`
    },
    {
        id: "touchpad-repair",
        title: "Touchpad Repair",
        category: "hardware",
        description: "Diagnosis and mechanical repair of erratic mouse movement, click triggers, or broken Dell trackpads.",
        features: ["Sensitivity adjustments", "Flex cable replacements", "Multi-gesture fix support", "Trackpad alignments"],
        estTime: "2 - 3 Hours",
        estPrice: "Starts from ₹850",
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`
    },
    {
        id: "motherboard-repair",
        title: "Motherboard Repair",
        category: "hardware",
        description: "Component-level micro-soldering solutions for complex issues like power failures or liquid damages.",
        features: ["IC controller chip swap", "Short circuit debugging", "BGA chip reballing", "Diagnostic oscilloscope checks"],
        estTime: "3 - 5 Business Days",
        estPrice: "Starts from ₹2,500",
        icon: `<svg viewBox="0 0 24 24"><path d="M3 3v18h18V3H3zm16 16H5V5h14v14zM7 7h3v3H7V7zm5 0h5v3h-5V7zm-5 5h5v5H7v-5zm7 0h3v5h-3v-5z"/></svg>`
    },
    {
        id: "bios-update",
        title: "BIOS Update",
        category: "software",
        description: "Secure, reliable BIOS / UEFI flashes and recovery from corrupted power disruptions.",
        features: ["Safe hardware EEPROM flashing", "System stability upgrade", "BitLocker backup handling", "Bootloop troubleshooting"],
        estTime: "1 - 2 Hours",
        estPrice: "Starts from ₹500",
        icon: `<svg viewBox="0 0 24 24"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1-5v-2h-2v2h2zm0-4V7h-2v6h2z"/></svg>`
    },
    {
        id: "windows-installation",
        title: "Windows Installation",
        category: "software",
        description: "Fresh installations of Microsoft Windows 10 or Windows 11 with authentic licenses.",
        features: ["Full formatting options", "Driver optimizations", "Antivirus security configs", "Microsoft Office trial setup"],
        estTime: "2 - 3 Hours",
        estPrice: "Starts from ₹750",
        icon: `<svg viewBox="0 0 24 24"><path d="M0 3.449L9.75 2.1v9.45H0V3.449zM0 12.45h9.75v9.45L0 20.551v-8.102zM10.8 1.95L24 0v11.55H10.8V1.95zm13.2 10.5v11.55l-13.2-1.95V12.45H24z"/></svg>`
    },
    {
        id: "software-installation",
        title: "Software Installation",
        category: "software",
        description: "Installation and registration help for graphic design, CAD, development tools and applications.",
        features: ["Adobe CC configurations", "AutoCAD settings verify", "Office setups", "Registry conflict fixes"],
        estTime: "1 Hour",
        estPrice: "Starts from ₹400",
        icon: `<svg viewBox="0 0 24 24"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>`
    },
    {
        id: "driver-installation",
        title: "Driver Installation",
        category: "software",
        description: "Updating essential system drivers for Dell laptops/desktops to fix audio, WiFi, and graphics issues.",
        features: ["NVIDIA/AMD gaming driver updates", "Dell SupportAssist config", "Realtek audio fixes", "Intel WiFi driver matching"],
        estTime: "1 Hour",
        estPrice: "Starts from ₹399",
        icon: `<svg viewBox="0 0 24 24"><path d="M19 13H5v-2h14v2z"/></svg>`
    },
    {
        id: "virus-removal",
        title: "Virus & Malware Removal",
        category: "maintenance",
        description: "Deep security scans and elimination of browser hijackers, spyware, keyloggers, and adwares.",
        features: ["Infected file sanitization", "Malware protection settings", "Premium Antivirus setups", "Safe browsing advice configs"],
        estTime: "2 - 4 Hours",
        estPrice: "Starts from ₹599",
        icon: `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>`
    },
    {
        id: "data-recovery",
        title: "Data Recovery",
        category: "upgrades",
        description: "Recovering crucial documents from formatted, crashed, or physically damaged storage drives.",
        features: ["Deleted database recovery", "Corrupt OS data extraction", "External backup setup", "High recovery success rate"],
        estTime: "1 - 3 Business Days",
        estPrice: "Starts from ₹1,500",
        icon: `<svg viewBox="0 0 24 24"><path d="M19 12v7H5v-7h14m2-2H3v11h18V10zm-5-6H8v3h8V4z"/></svg>`
    },
    {
        id: "networking",
        title: "Networking",
        category: "business",
        description: "Professional networking routing configurations for corporate office workgroups and home environments.",
        features: ["Router setup configurations", "WiFi booster placements", "LAN cabling mapping", "Firewall security configurations"],
        estTime: "1 - 2 Business Days",
        estPrice: "Starts from ₹1,499",
        icon: `<svg viewBox="0 0 24 24"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg>`
    },
    {
        id: "annual-maintenance",
        title: "Annual Maintenance (AMC)",
        category: "maintenance",
        description: "Corporate AMC plans to protect your Dell hardware arrays and minimize downtime.",
        features: ["Quarterly hardware cleanup", "Priority service response", "Antivirus software upgrades", "Discount on major parts"],
        estTime: "Annual Contract",
        estPrice: "Custom Pricing",
        icon: `<svg viewBox="0 0 24 24"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>`
    },
    {
        id: "remote-assistance",
        title: "Remote Assistance",
        category: "maintenance",
        description: "Instant diagnosis for basic software configurations, print queue issues, or virus troubleshooting over TeamViewer/AnyDesk.",
        features: ["Secure remote connection", "Instant dispatch availability", "No physical travel required", "Easy setup tools help"],
        estTime: "30 - 60 Mins",
        estPrice: "Starts from ₹499",
        icon: `<svg viewBox="0 0 24 24"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z"/></svg>`
    },
    {
        id: "business-support",
        title: "Business IT Support",
        category: "business",
        description: "Onsite server setup, commercial Dell Latitude fleets setup and custom networks for Hebbal business clusters.",
        features: ["SLA dispatch contracts", "Data redundancy setup", "Dell server diagnostic support", "Workstation fleet management"],
        estTime: "SLA Dependent",
        estPrice: "Custom Quote",
        icon: `<svg viewBox="0 0 24 24"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm10 12h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm4 8h-2v-2h2v2zm0-4h-2v-2h2v2z"/></svg>`
    }
];

// ==========================================
// RENDER & FILTER PROCESS
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const servicesContainer = document.getElementById('services-grid-container');
    const searchInput = document.getElementById('services-search');
    const filterButtons = document.querySelectorAll('.filter-btn');

    if (!servicesContainer) return; // Exit if not on services page

    const renderServices = (filterCategory = 'all', searchQuery = '') => {
        servicesContainer.innerHTML = '';
        
        const filtered = DELL_SERVICES.filter(service => {
            const matchesCategory = filterCategory === 'all' || service.category === filterCategory;
            const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                  service.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });

        if (filtered.length === 0) {
            servicesContainer.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-secondary);">
                    <h3>No Dell services found matching your search.</h3>
                    <p style="margin-top: 10px;">Try typing another keyword or change your filter category.</p>
                </div>
            `;
            return;
        }

        filtered.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card animate-on-scroll fade-up animated';
            
            // Build bullet list for features
            let featuresHTML = '';
            service.features.forEach(feat => {
                featuresHTML += `<li>${feat}</li>`;
            });

            card.innerHTML = `
                <div class="service-card-icon">
                    ${service.icon}
                </div>
                <h3 class="service-card-title">${service.title}</h3>
                <p class="service-card-desc">${service.description}</p>
                
                <div class="service-details-meta">
                    <div class="service-meta-item">
                        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                        <span><strong>Time:</strong> ${service.estTime}</span>
                    </div>
                    <div class="service-meta-item">
                        <svg viewBox="0 0 24 24" width="16" height="16"><path fill="currentColor" d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>
                        <span><strong>Price:</strong> ${service.estPrice}</span>
                    </div>
                </div>
                
                <ul class="service-features-list">
                    ${featuresHTML}
                </ul>

                <div class="service-card-actions" style="margin-top: auto;">
                    <a href="contact.html?device=${encodeURIComponent(service.title)}" class="btn-card-learn">
                        Learn More 
                        <svg viewBox="0 0 24 24"><path d="M5 13h11.86l-5.43 5.43 1.42 1.42L21.14 12l-8.29-8.29-1.42 1.42L16.86 11H5v2z"/></svg>
                    </a>
                    <button class="btn btn-primary btn-card-book" onclick="openBookingModal('${service.title}')">Book Now</button>
                </div>
            `;
            servicesContainer.appendChild(card);
        });
    };

    // Category button click handling
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            const searchVal = searchInput ? searchInput.value : '';
            renderServices(category, searchVal);
        });
    });

    // Search bar input handling
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const activeBtn = document.querySelector('.filter-btn.active');
            const category = activeBtn ? activeBtn.getAttribute('data-category') : 'all';
            renderServices(category, e.target.value);
        });
    }

    // Initial render on page load
    renderServices();
});
