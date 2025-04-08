
// Initialize with current date
document.addEventListener('DOMContentLoaded', function() {
    const today = new Date().toISOString().split('T')[0];
    document.getElementById('entryDate').value = today;
    
    // Generate a random record number
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('recordNumber').value = `ORD-${today.replace(/-/g, '')}-${randomNum}`;
});

function updateTotal() {
    const sewingPrice = parseFloat(document.getElementById('sewingPrice').value) || 0;
    const ditchPrice = parseFloat(document.getElementById('ditchPrice').value) || 0;
    const shirtPrice = parseFloat(document.getElementById('shirtPrice').value) || 0;
    const pantPrice = parseFloat(document.getElementById('pantPrice').value) || 0;
    const bushiPrice = parseFloat(document.getElementById('bushiPrice').value) || 0;
    const extraPrice = parseFloat(document.getElementById('extraPrice').value) || 0;
    
    const total = sewingPrice + ditchPrice + shirtPrice + pantPrice + bushiPrice + extraPrice;
    
    document.getElementById('totalPriceInput').value = total;
    updateRemaining();
}

function updateRemaining() {
    const total = parseFloat(document.getElementById('totalPriceInput').value) || 0;
    const paid = parseFloat(document.getElementById('paidAmount').value) || 0;
    
    const remaining = total - paid;
    document.getElementById('remainingAmount').textContent = remaining + " روپے";
    
    // Change color based on remaining amount
    const remainingElement = document.getElementById('remainingAmount');
    if (remaining <= 0) {
        remainingElement.style.color = 'var(--success-color)';
    } else {
        remainingElement.style.color = 'var(--danger-color)';
    }
}

document.getElementById('clearBtn').addEventListener('click', function(e) {
    e.preventDefault();
    if(confirm('کیا آپ واقعی فارم صاف کرنا چاہتے ہیں؟ تمام ڈیٹا ضائع ہو جائے گا۔')) {
        document.getElementById('tailorOrderForm').reset();
        // Reset to default values
        document.getElementById('sewingPrice').value = 1500;
        document.getElementById('totalPriceInput').value = 1500;
        document.getElementById('remainingAmount').textContent = "1500 روپے";
        
        // Generate new record number
        const today = new Date().toISOString().split('T')[0];
        const randomNum = Math.floor(1000 + Math.random() * 9000);
        document.getElementById('recordNumber').value = `ORD-${today.replace(/-/g, '')}-${randomNum}`;
        document.getElementById('entryDate').value = today;
    }
});

document.getElementById('printBtn').addEventListener('click', function(e) {
    e.preventDefault();
    window.print();
});

document.getElementById('saveBtn').addEventListener('click', function(e) {
    e.preventDefault();
    // Validate form
    const customerName = document.getElementById('customerName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    
    if (!customerName || !phoneNumber) {
        alert('براہ کرم گاہک کا نام اور فون نمبر درج کریں!');
        return;
    }
    
    alert('آرڈر محفوظ کر لیا گیا ہے!');
    // Here you would typically send data to server
});

document.getElementById('deleteBtn').addEventListener('click', function(e) {
    e.preventDefault();
    if(confirm('کیا آپ واقعی یہ آرڈر حذف کرنا چاہتے ہیں؟')) {
        alert('آرڈر حذف کر دیا گیا ہے!');
        document.getElementById('tailorOrderForm').reset();
    }
});

document.getElementById('exitBtn').addEventListener('click', function(e) {
    e.preventDefault();
    if(confirm('کیا آپ واقعی فارم بند کرنا چاہتے ہیں؟')) {
        window.close();
    }
});

// Initialize calculations
updateTotal();
