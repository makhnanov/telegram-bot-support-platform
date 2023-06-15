generate-readme:
	pandoc -s /usr/bin/find /var/www/telegram-bot-support-platform/ -name "*.md" -not -path "./README.md" -not -path "./lessons/abbreviations.md" -print0 | xargs -0 grep -l ":heavy_check_mark:" | sort -rV -o README.md
