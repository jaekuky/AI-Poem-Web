// 1인 운영 블로그가 바이라인·본문에서 편집팀이 있는 것처럼 표기하지 않는지 검사
const assert = require('node:assert/strict');
const { test } = require('node:test');
const fs = require('node:fs');
const path = require('node:path');

const blog = path.resolve(__dirname, '../../frontend/blog');
const pages = fs.readdirSync(blog, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .flatMap(dir => fs.readdirSync(path.join(blog, dir.name))
        .filter(name => name.endsWith('.html'))
        .map(name => path.join(dir.name, name)));

// 31개 언어 블로그에 쓰였던 "편집팀" 번역어
const teamLabel = /Editorial|편집팀|編集チーム|编辑团队|Redaktion|Équipe|Equipe|Equipo|Team|команда|ทีม|Ekibi|দল|Ομάδα|Zespół|टीम|Tim |toimitus|Nhóm|Đội ngũ|Pasukan/;

test('블로그 바이라인에 편집팀 표기가 없음', () => {
    for (const page of pages) {
        const meta = fs.readFileSync(path.join(blog, page), 'utf8').match(/<p class="article-meta">([\s\S]*?)<\/p>/);
        if (meta) assert.ok(!teamLabel.test(meta[1]), `${page}: ${meta[1].trim()}`);
    }
});

test('블로그 본문에 "저희 팀" 표현이 없음', () => {
    for (const page of pages) {
        assert.ok(!fs.readFileSync(path.join(blog, page), 'utf8').includes('저희 팀'), page);
    }
});
