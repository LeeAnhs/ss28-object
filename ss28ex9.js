let books = [
    {
        id: 1,
        title: "JavaScript cơ bản",
        author: "John Doe",
        year: 2020,
        price: 250000,
        isAvailable: true
    },
    {
        id: 2,
        title: "HTML và CSS",
        author: "Jane Smith", 
        year: 2021,
        price: 180000,
        isAvailable: true
    }
];

function addBook(title, author, year, price) {
    const newBook = {
        id: books.length + 1,
        title: title,
        author: author,
        year: year,
        price: price,
        isAvailable: true
    };
    books.push(newBook);
    alert("Đã thêm sách mới thành công!");
}

function displayBooks() {
    let bookList = "DANH SÁCH SÁCH:\n\n";
    books.forEach(book => {
        bookList += `ID: ${book.id}\n`;
        bookList += `Tên: ${book.title}\n`;
        bookList += `Tác giả: ${book.author}\n`;
        bookList += `Năm: ${book.year}\n`;
        bookList += `Giá: ${book.price} VND\n`;
        bookList += `Trạng thái: ${book.isAvailable ? "Có sẵn" : "Đã mượn"}\n`;
        bookList += "---------------\n";
    });
    alert(bookList);
}

function searchBook(title) {
    const found = books.filter(book => 
        book.title.toLowerCase().includes(title.toLowerCase())
    );
    
    if (found.length === 0) {
        alert("Không tìm thấy sách!");
        return;
    }

    let results = "KẾT QUẢ TÌM KIẾM:\n\n";
    found.forEach(book => {
        results += `ID: ${book.id}, Tên: ${book.title}, Tác giả: ${book.author}\n`;
    });
    alert(results);
}

function updateStatus(id) {
    const book = books.find(book => book.id === id);
    if(book) {
        book.isAvailable = !book.isAvailable;
        alert(`Đã cập nhật trạng thái sách "${book.title}" thành ${book.isAvailable ? "Có sẵn" : "Đã mượn"}`);
    } else {
        alert("Không tìm thấy sách với ID này!");
    }
}

function deleteBook(id) {
    const length = books.length;
    books = books.filter(book => book.id !== id);
    
    if (books.length === length) {
        alert("Không tìm thấy sách với ID này!");
    } else {
        alert("Đã xóa sách thành công!");
    }
}

function sortByPrice() {
    books.sort((a, b) => a.price - b.price);
    displayBooks();
}

function mainMenu() {
    while (true) {
        let choice = prompt( 
            "1. Thêm sách\n" +
            "2. Hiển thị danh sách sách\n" +
            "3. Tìm kiếm sách theo tiêu đề\n" +
            "4. Cập nhật trạng thái sách\n" +
            "5. Xóa sách theo ID\n" +
            "6. Sắp xếp sách theo giá\n" +
            "7. Thoát\n\n" +
            "Nhập lựa chọn của bạn (1-7):"
        );

        switch (choice) {
            case "1":
                let title = prompt("Nhập tên sách:");
                let author = prompt("Nhập tác giả:");
                let year = parseInt(prompt("Nhập năm xuất bản:"));
                let price = parseInt(prompt("Nhập giá sách:"));
                
                if (title && author && !isNaN(year) && !isNaN(price)) {
                    addBook(title, author, year, price);
                } else {
                    alert("Thông tin không hợp lệ! Vui lòng thử lại.");
                }
                break;

            case "2":
                displayBooks();
                break;
            case "3":
                let searchTitle = prompt("Nhập tên sách cần tìm:");
                if (searchTitle) {
                    searchBook(searchTitle);
                }
                break;
            case "4":
                let updateId = parseInt(prompt("Nhập ID sách cần cập nhật trạng thái:"));
                if (!isNaN(updateId)) {
                    updateStatus(updateId);
                }
                break;
            case "5":
                let deleteId = parseInt(prompt("Nhập ID sách cần xóa:"));
                if (!isNaN(deleteId)) {
                    deleteBook(deleteId);
                }
                break;

            case "6":
                sortByPrice();
                break;

            case "7":
                if (confirm("Bạn có chắc muốn thoát chương trình?")) {
                    alert("Cảm ơn bạn đã sử dụng chương trình!");
                    return;
                }
                break;

            default:
                alert("Lựa chọn không hợp lệ! Vui lòng chọn từ 1-7.");
        }
    }
}
mainMenu();
