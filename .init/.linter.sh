#!/bin/bash
cd /home/kavia/workspace/code-generation/university-digital-card-management-system-12d215d9/admin_portal_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

