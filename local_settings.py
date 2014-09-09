
DEBUG = True 

# Make these unique, and don't share it with anybody.
SECRET_KEY = "ca1d32a3-74ff-42ff-a9bc-dd72e0c76fa09e61ec60-5a6f-4809-91dd-c7e6055b0b51503e0b6b-446b-41be-9b0f-b7e94db1390a"
NEVERCACHE_KEY = "086b149a-33a0-4f03-bda4-684b7d3a7495e907e104-44bd-4752-823c-a8ae9defa124cf3ddcaf-c63b-4559-9ac6-f4074116a25f"

DATABASES = {
    "default": {
        # Ends with "postgresql_psycopg2", "mysql", "sqlite3" or "oracle".
        "ENGINE": "django.db.backends.sqlite3",
        # DB name or path to database file if using sqlite3.
        "NAME": "dev.db",
        # Not used with sqlite3.
        "USER": "",
        # Not used with sqlite3.
        "PASSWORD": "",
        # Set to empty string for localhost. Not used with sqlite3.
        "HOST": "",
        # Set to empty string for default. Not used with sqlite3.
        "PORT": "",
    }
}
