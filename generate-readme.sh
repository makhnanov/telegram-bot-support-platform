rm -f README.md
EXCL1="./README.md"
EXCL2="./lessons/abbreviations.md"
FOUNDED=(/usr/bin/find /var/www/telegram-bot-support-platform/ -name "*.md" -not -path "$EXCL1" -not -path "$EXCL2" -print0)

#FILES=$($("$FOUNDED") | xargs -0 grep -Pl "(:heavy_check_mark:|:x:)" | sort -rV)

#WITH_RESULT=(${FOUNDED[@]}" | xargs -0 grep -Pl "(:heavy_check_mark:|:x:)")

WITH_RESULT=$("${FOUNDED[@]}" | xargs -0 grep -Pl "(:heavy_check_mark:|:x:)")

SORTED=$(echo "$WITH_RESULT" | sort -rV)

NEEDED_FILES=$(echo -e "/var/www/telegram-bot-support-platform/README.template.md\n$SORTED")

# echo $NEEDED_FILES

pandoc -s ${NEEDED_FILES[@]} -o README.md

#
#
# echo Test
# $FOUNDED | xargs -0 grep -Pl "(:heavy_check_mark:|:x:)"
