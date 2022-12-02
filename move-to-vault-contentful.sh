# Install contentful CLI and logout if necesary
npm i -g contentful-cli
yes Y | contentful logout
clear

echo "Login with the user to access organization to migrate"
contentful login
read -p "Enter the Organization Space ID to vualt and will be donwloaded for exporting " toVaultSpaceId 
contentful space export --download-assets --content-file  exported-file.json --space-id $toVaultSpaceId 

yes Y | contentful logout
clear
python3 -m webbrowser  https://be.contentful.com/logout

echo "Login with the user to access the vault"
contentful login
read -p "Enter the Vault Organization Space ID where to migrate " intoVaultSpaceId 
contentful space import --content-file exported-file.json --space-id $intoVaultSpaceId  --environment-id master

# Remove contentful CLI and migration files
rm -r images.ctfassets.net
rm exported-file.json
npm uninstall -g contentful-cli

