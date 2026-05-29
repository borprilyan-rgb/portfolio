import reflex as rx

config = rx.Config(
    app_name="boris_portfolio",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)