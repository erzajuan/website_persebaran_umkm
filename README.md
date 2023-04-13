# Requirement

## Front End

## Pages

- Login/RegisterPage (Menampilkan form untuk login ataupun register)
- HomePage ( Menampilkan Daftar UMKM [ image, name, location ] dengan status "Validated" )
- ProfilePage ( Menampilkan Profile dari user yang login [ name, email, role ], beserta umkm yang dimiliki )
- DetailPage ( Menampilkan Detail dari UMKM yang Dipilih [ image, name, location, description, openDays, openTime, map, menus])
- AddUmkmPage ( Membuat UMKM )
- EditUmkmPage ( Mengedit UMKM )
- AddMenuPage ( Membuat Menu )
- EditMenuPage ( Mengedit Menu )
- ListUmkmPage ( Menampilkan Seluruh UMKM yang ada di database ) \*Muncul pada halaman Profile dengan user role "Admin"

## Back End

## Tables

- users ( id integer [primary key],
  username varchar,
  password varchar,
  email varchar,
  role varchar,
  createdAt date,
  updatedAt date )
- umkms ( id integer [primary key],
  name varchar,
  location varchar,
  description varchar,
  openDays varchar,
  openTime varchar,
  map varchar,
  status varchar,
  image varchar,
  userId integer,
  createdAt date,
  updatedAt date )
- menus ( id integer [primary key],
  name varchar,
  price integer,
  image varchar,
  umkmId integer,
  createdAt date,
  updatedAt date )

## API

## UMKM API

```http
GET URL/api/umkms
```

```http
POST URL/api/umkms
```

```http
DELETE URL/api/umkms/:id
```

```http
PUT URL/api/umkms/:id
```


