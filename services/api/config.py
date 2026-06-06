from pydantic_settings import BaseSettings
from functools import lru_cache

class Settings(BaseSettings):
    app_name: str = "Haul.AI"
    debug: bool = False
    database_url: str = "postgresql://user:password@localhost/haulai"
    redis_url: str = "redis://localhost:6379/0"
    api_url: str = "http://localhost:8000"
    cors_origins: list[str] = ["http://localhost:3008"]

    class Config:
        env_file = ".env.local"
        extra = "ignore"

@lru_cache()
def get_settings():
    return Settings()
