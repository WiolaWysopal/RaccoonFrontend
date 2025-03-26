# RaccoonFrontend

## Uproszczony schemat działania sieci:

![alt text](image.png)

### Pojęcia:

**ISP (Internet Service Provider) – Dostawca usług internetowych**

To firma, która zapewnia użytkownikom dostęp do Internetu. ISP może oferować różne 
rodzaje połączeń, np. światłowodowe, kablowe, mobilne (LTE, 5G) czy satelitarne. 
Przykłady dostawców to Orange, T-Mobile, UPC.

**Router:**

To urządzenie sieciowe, które zarządza ruchem internetowym w sieci lokalnej i 
przekazuje dane między urządzeniami (komputerami, telefonami) a Internetem. 
Router często pełni też funkcję punktu dostępu Wi-Fi, umożliwiając bezprzewodowe 
połączenie z siecią.

**Pakiet danych:**

Podstawowa jednostka transmisji danych w sieciach komputerowych. Dane wysyłane 
przez Internet są dzielone na mniejsze fragmenty – pakiety, które zawierają:
- nagłówek (adresy nadawcy i odbiorcy, informacje kontrolne),
- ładunek (właściwa treść, np. fragment strony internetowej).
Pakiety mogą podróżować różnymi trasami, a na końcu są składane w całość.

**Serwer:**

To komputer lub system, który przechowuje i udostępnia zasoby innym urządzeniom 
w sieci. Serwery mogą obsługiwać strony WWW, pocztę e-mail, pliki czy bazy danych. 
Przykładowo, gdy odwiedzasz stronę internetową, Twój komputer łączy się z serwerem, 
który przesyła pliki strony do Twojej przeglądarki.

**Klient:**

To urządzenie lub oprogramowanie, które wysyła zapytania do serwera i odbiera od 
niego odpowiedzi. Przykłady klientów to:
- przeglądarka internetowa (klient HTTP) – pobiera strony WWW,
- program pocztowy (klient e-mail) – pobiera wiadomości e-mail z serwera,
- aplikacja mobilna łącząca się z bazą danych.

W komunikacji sieciowej klient i serwer współpracują – klient wysyła żądanie, a 
serwer odpowiada, dostarczając żądane dane.

## Nagłówki żądań (Request Headers) i ich przeznaczenie:

1. `User-Agent` – identyfikuje przeglądarkę i system operacyjny użytkownika. Wartość:
   `Mozilla/5.0 (X11; Linux aarch64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Safari/537.36 CrKey/1.54.250320`
   serwer może na tej podstawie dostosować treść strony (np. wersja mobilna lub desktopowa).

2. `Accept` – informuje serwer, jakie typy treści klient akceptuje. Wartość:
   `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7`
   oznacza, że przeglądarka preferuje format HTML, ale obsługuje też obrazy WebP i AVIF.

3. `Cookie` – zawiera dane sesyjne i identyfikatory użytkownika przechowywane w plikach cookie. Serwer może wykorzystać je do personalizacji treści lub uwierzytelniania.

## Nagłówki odpowiedzi (Response Headers) i ich przeznaczenie:

1. `Cache-Control` – określa, jak długo treść może być przechowywana w pamięci podręcznej. Wartość:
   `public, max-age=31536000`
   oznacza, że zasób może być buforowany przez rok (31 536 000 sekund).

2. `Content-Encoding` – informuje, czy odpowiedź została skompresowana. Wartość:
   `gzip`
   oznacza, że serwer skompresował treść, aby przyspieszyć ładowanie strony.

3. `Vary` – wskazuje, że treść może się różnić w zależności od nagłówka Accept-Encoding. Wartość:
   `Accept-Encoding`
   dzięki temu serwer może dostosować odpowiedź do formatu obsługiwanego przez klienta.

## Analiza 3 popularnych dostawców hostingowych:

Analizując oferty trzech popularnych dostawców usług hostingowych: Bluehost, SiteGround i Amazon Web Services (AWS), przedstawiam poniższą tabelę porównawczą uwzględniającą typy hostingu, ceny, przestrzeń dyskową, przepustowość oraz dodatkowe funkcje.

| Dostawca  | Typ hostingu   | Cena miesięczna | Przestrzeń dyskowa | Przepustowość   | Dodatkowe funkcje |
|-----------|----------------|-----------------|--------------------|-----------------|-------------------|
| Bluehost  | Współdzielony  | $2.95           | 50 GB SSD          | Nielimitowana   | Darmowa domena na 1 rok, bezpłatny certyfikat SSL, 1-klickowe instalacje aplikacji |
| SiteGround| Współdzielony  | $3.99           | 10 GB SSD          | Nielimitowana   | Darmowa codzienna kopia zapasowa, bezpłatny certyfikat SSL, CDN Cloudflare |
| AWS       | Chmura         | Zgodnie z użyciem| Zgodnie z użyciem  | Zgodnie z użyciem| Elastyczność skalowania, płatność za użycie |

Rekomendacja dla niewielkiej strony osobistej:

Dla niewielkiej strony osobistej zalecam wybór **Bluehost**. Oferuje on przystępne ceny, znaczną przestrzeń dyskową oraz dodatkowe funkcje, takie jak darmowa domena i certyfikat SSL, co jest korzystne dla początkujących użytkowników. Jest również oficjalnie rekomendowany przez WordPress, co świadczy o jego niezawodności i kompatybilności z popularnymi systemami zarządzania treścią.

Wyjaśnienie pojęć:

- **Hosting współdzielony:** 
    - forma hostingu, w której wiele stron internetowych dzieli te same zasoby serwera, takie jak pamięć i moc obliczeniowa. Jest to najczęściej wybierana opcja dla małych i średnich stron ze względu na niskie koszty.

- **VPS (Virtual Private Server):** 
    - typ hostingu, który oferuje wirtualnie wydzieloną część serwera fizycznego. Użytkownicy mają większą kontrolę nad swoimi zasobami i konfiguracją, co jest przydatne dla bardziej wymagających aplikacji.

- **Hosting dedykowany:** 
    - usługa, w której klient otrzymuje cały serwer do wyłącznego użytku. Zapewnia to pełną kontrolę nad zasobami i konfiguracją, jednak jest droższe i bardziej skomplikowane w zarządzaniu.

- **Hosting w chmurze:** 
    - usługa polegająca na przechowywaniu danych i aplikacji na wirtualnych serwerach, które korzystają z zasobów rozproszonych w sieci. Oferuje elastyczność i skalowalność, umożliwiając dostosowanie zasobów do aktualnych potrzeb.

- **Przepustowość:** 
    - maksymalna ilość danych, które mogą być przesyłane przez łącze internetowe w jednostce czasu. W kontekście hostingu odnosi się do ilości danych, które użytkownicy mogą pobrać ze strony w określonym czasie, co wpływa na szybkość ładowania i dostępność strony.

## `DNS LOOKUP`

### 1. Wykonanie DNS lookup
Polecenie w wierszu poleceń Windows: `nslookup wikipedia.org`

Wynik:

`Server:  funbox.home`

`Address:  192.168.1.1`

`Non-authoritative answer:`

`Name:    wikipedia.org`

`Addresses:  2a02:ec80:300:ed1a::1`
          
`185.15.59.224`

### 2. Pobranie serwerów nazw (nameservers)

`nslookup -type=NS wikipedia.org`

### 3. Sprawdzenie różnych rekordów DNS

`nslookup -type=A wikipedia.org    # Rekord IPv4`
`nslookup -type=AAAA wikipedia.org # Rekord IPv6`
`nslookup -type=CNAME wikipedia.org # Alias (jeśli istnieje)`
`nslookup -type=MX wikipedia.org   # Serwery pocztowe`

### Pojęcia

- `DNS (Domain Name System)` - system tłumaczący nazwy domenowe (np. wikipedia.org) na adresy IP, które są używane przez urządzenia w sieci.

- `Serwer DNS (Nameserver)` - komputer przechowujący informacje o domenach i ich adresach IP, odpowiadający na zapytania DNS.

- `Adres IP` - numeryczna reprezentacja urządzenia w sieci.
  Może być w formacie:
  - `IPv4 (np. 185.15.59.224)`
  - `IPv6 (np. 2a02:ec80:300:ed1a::1)`

- `Rekordy DNS` - wpisy w bazie danych DNS, które zawierają informacje o domenie:
  - `A`      - mapuje domenę na adres IPv4
  - `AAAA`   - mapuje domenę na adres IPv6
  - `CNAME`  - alias domeny (np. `www.example.com` może wskazywać na `example.com`)
  - `MX`     - wskazuje serwery obsługujące pocztę e-mail dla domeny

#### Zamiana domeny na adres IP w DNS

1. Zapytanie do lokalnego serwera DNS
   - Gdy wpisujesz wikipedia.org w przeglądarce, komputer 
     wysyła zapytanie do lokalnego serwera DNS (zwykle routera 
     lub serwera dostawcy internetu).

2. Rekurencyjne zapytanie do serwerów DNS
   - Jeśli lokalny serwer DNS nie zna odpowiedzi, przekazuje 
     zapytanie do wyższych poziomów DNS, np. serwerów `root` (`.`)
     `->` serwerów TLD (`.org`) `->` autorytatywnych serwerów Wikipedia.

3. Zwrot adresu IP
   - Po znalezieniu odpowiedniego rekordu DNS, adres IP domeny 
     wraca do przeglądarki, która nawiązuje połączenie z 
     serwerem docelowym.

4. Ładowanie strony
   - Przeglądarka łączy się z serwerem Wikipedia i pobiera 
     stronę www.

## Działanie przeglądarek internetowych:

1. Sprawdzenie `Cache DNS`:
   - Przeglądarka sprawdza, czy adres IP dla danej domeny znajduje sie w lokalnej pamięci `cache`.
   - Jesli nie, wysyła zapytanie do lokalnego serwera DNS.

2. Zapytanie `DNS` i zamiana na adres `IP`:
   - Lokalny serwer DNS sprawdza, czy zna adres IP domeny.
   - Jeśli nie, przekazuje zapytanie do serwerów wyższego poziomu.
   - Po uzyskaniu adresu IP przesyła go do przeglądarki.

3. Nawiązywanie połączenia `TCP/IP`:
   - Przeglądarka inicjuje połączenie z serwerem docelowym.
   - Używa do tego protokolu `TCP/IP` (trzy-etapowy `handshake`).
   - Jeśli strona korzysta z `HTTPS`, rozpoczyna się negocjacja `TLS`.

4. Wysyłanie zadania `HTTP GET`:
   - Przeglądarka wysyła zadanie `HTTP GET` do serwera.
   - Może zawieraż nagłówki takie jak `User-Agent` czy `Cookies`.

5. Otrzymanie odpowiedzi `HTTPS`:
   - Serwer odpowiada kodem statusu (np. `200 OK` lub `404 Not Found`).
   - Wysyła treść strony w formie dokumentu `HTML`.

6. Parsowanie i interpretacja `HTML`:
   - Przeglądarka analizuje kod `HTML` i buduje model `DOM` (_Document 
     Object Model_).

7. Wyszukiwanie i ładowanie zasobów:
   - Przeglądarka analizuje znaczniki <link>, <script>, <img>  i pobiera dodatkowe pliki (`CSS`, `JS`, obrazy).

8. Parsowanie i stylizacja `CSS`:
   - Przeglądarka przetwarza pliki `CSS` i tworzy model `CSSOM`.
   - Łączy go z `DOM`, tworząc `Render Tree`.

9. Renderowanie strony:
   - Przeglądarka oblicza rozmieszczenie elementów na stronie (`layout`).
   - Generuje piksele i wyświetla treść na ekranie.

10. Wykonywanie skryptów `JS`:
    - Przeglądarka interpretuje i uruchamia kod JS.
    - Może on dynamicznie zmieniać zawartość `DOM` i `CSSOM`.

11. Interacja użytkownika:
    - Strona jest w pełni zaladowana, użytkownik może na niej działać.
    - Dalsze akcje (np. kliknięcia) mogą generować kolejne zapytania HTTP.

### Pojęcia:

- Silnik renderujący - mechanizm przeglądarki odpowiedzialny za interpretację HTML, CSS i JS.
- DOM (Document Object Model) - struktura drzewa reprezentująca elementy strony.
- TCP/IP - zestaw protokołów komunikacyjnych w internecie.
- Parsowanie HTML - analiza kodu HTML i budowanie struktury DOM.
- Renderowanie CSS - przekształcanie stylów na wygląd elementów strony.

