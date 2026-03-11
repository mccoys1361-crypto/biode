#!/bin/bash
# IndexNow URL submission script
HOST="biode.co.kr"
KEY="54ac95407bb5434892164a2e9d90ef4f"
PAYLOAD='{"host":"biode.co.kr","key":"54ac95407bb5434892164a2e9d90ef4f","keyLocation":"https://biode.co.kr/54ac95407bb5434892164a2e9d90ef4f.txt","urlList":["https://biode.co.kr/","https://biode.co.kr/experience","https://biode.co.kr/contact","https://biode.co.kr/only","https://biode.co.kr/wow/principle","https://biode.co.kr/wow/technology","https://biode.co.kr/wow/effect"]}'
echo "=== IndexNow URL Submit ==="
echo "Submitting 7 URLs..."
echo ""
echo "1. api.indexnow.org"
R1=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://api.indexnow.org/indexnow" -H "Content-Type: application/json; charset=utf-8" -d "$PAYLOAD" --max-time 15)
echo "   HTTP $R1"
echo "2. bing.com"
R2=$(curl -s -o /dev/null -w "%{http_code}" -X POST "https://www.bing.com/indexnow" -H "Content-Type: application/json; charset=utf-8" -d "$PAYLOAD" --max-time 15)
echo "   HTTP $R2"
echo ""
echo "=== Done ==="
