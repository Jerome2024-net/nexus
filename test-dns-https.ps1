# Script de vérification DNS et HTTPS pour nexusrealty.org

Write-Host "🔍 DIAGNOSTIC DNS ET HTTPS - nexusrealty.org" -ForegroundColor Cyan
Write-Host "=" * 50

Write-Host "`n1. Test DNS principal (nexusrealty.org):" -ForegroundColor Yellow
try {
    $dns1 = Resolve-DnsName nexusrealty.org -Type A
    foreach ($record in $dns1) {
        if ($record.IPAddress) {
            Write-Host "   ✅ $($record.IPAddress)" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "   ❌ Erreur DNS" -ForegroundColor Red
}

Write-Host "`n2. Test DNS www (www.nexusrealty.org):" -ForegroundColor Yellow
try {
    $dns2 = Resolve-DnsName www.nexusrealty.org -Type CNAME
    foreach ($record in $dns2) {
        if ($record.NameHost) {
            if ($record.NameHost -like "*github.io*") {
                Write-Host "   ✅ $($record.NameHost)" -ForegroundColor Green
            } else {
                Write-Host "   ❌ $($record.NameHost) (INCORRECT!)" -ForegroundColor Red
                Write-Host "   👉 Doit être: Jerome2024-net.github.io." -ForegroundColor Cyan
            }
        }
    }
} catch {
    Write-Host "   ❌ Erreur CNAME" -ForegroundColor Red
}

Write-Host "`n3. Test connectivité HTTP:" -ForegroundColor Yellow
try {
    $http = Invoke-WebRequest -Uri "http://nexusrealty.org" -Method Head -UseBasicParsing
    Write-Host "   ✅ HTTP fonctionne (Code: $($http.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host "   ❌ HTTP ne fonctionne pas" -ForegroundColor Red
}

Write-Host "`n4. Test connectivité HTTPS:" -ForegroundColor Yellow
try {
    $https = Invoke-WebRequest -Uri "https://nexusrealty.org" -Method Head -UseBasicParsing
    Write-Host "   ✅ HTTPS fonctionne (Code: $($https.StatusCode))" -ForegroundColor Green
} catch {
    Write-Host "   ❌ HTTPS ne fonctionne pas" -ForegroundColor Red
    Write-Host "   👉 Normal si DNS www pas encore corrigé" -ForegroundColor Cyan
}

Write-Host "`n📋 RÉSUMÉ:" -ForegroundColor Cyan
Write-Host "- Si DNS www est incorrect → Corriger chez Namecheap"
Write-Host "- Si DNS www est correct → Attendre propagation (15-30 min)"
Write-Host "- Si HTTPS ne marche pas → Re-configurer domaine GitHub Pages"

Write-Host "`n🎯 GitHub Pages Settings:" -ForegroundColor Cyan
Write-Host "https://github.com/Jerome2024-net/nexus/settings/pages"
