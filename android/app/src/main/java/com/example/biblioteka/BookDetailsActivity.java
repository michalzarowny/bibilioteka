package com.example.biblioteka;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class BookDetailsActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_book_details);

        TextView title = findViewById(R.id.detailTitle);
        TextView author = findViewById(R.id.detailAuthor);
        TextView category = findViewById(R.id.detailCategory);
        TextView pages = findViewById(R.id.detailPages);

        title.setText(getIntent().getStringExtra("title"));
        author.setText("Autor: " + getIntent().getStringExtra("author"));
        category.setText("Kategoria: " + getIntent().getStringExtra("category"));

        int pageCount = getIntent().getIntExtra("pages", -1);

        pages.setText(pageCount >= 0
                ? "Liczba stron: " + pageCount
                : "Liczba stron: brak danych");
    }
}
