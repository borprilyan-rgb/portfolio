import reflex as rx

class EstimatorState(rx.State):
    """Handles the reactive logic for the live material takeoff estimator."""
    # Data dictionary for base material defaults: [Base Unit Rate, Default Qty, Default Waste %]
    material_data: dict[str, list[float]] = {
        "Reinforced Concrete (m3)": [120.0, 150.0, 5.0],
        "Structural Steel (Ton)": [2500.0, 12.0, 8.0],
        "Brickwork (m2)": [45.0, 450.0, 10.0],
    }

    # Form states
    selected_material: str = "Reinforced Concrete (m3)"
    quantity: float = 150.0
    waste_percent: float = 5.0
    custom_rate: float = 120.0

    def change_material(self, new_material: str):
        """Update defaults instantly when a new material is selected."""
        self.selected_material = new_material
        defaults = self.material_data[new_material]
        self.custom_rate = defaults[0]
        self.quantity = defaults[1]
        self.waste_percent = defaults[2]

    @rx.var
    def net_cost(self) -> float:
        """Calculate the base cost before waste allocation."""
        return round(self.quantity * self.custom_rate, 2)

    @rx.var
    def waste_cost(self) -> float:
        """Calculate the financial impact of the material waste allocation."""
        return round(self.net_cost * (self.waste_percent / 100), 2)

    @rx.var
    def total_cost(self) -> float:
        """Calculate the final total scheduled cost configuration."""
        return round(self.net_cost + self.waste_cost, 2)
    
    def set_quantity(self, value: list[float]):
        """Sliders return a list of values, so we grab the first item."""
        self.quantity = float(value[0])

    def set_waste_percent(self, value: list[float]):
        self.waste_percent = float(value[0])

    def set_custom_rate(self, value: str):
        """Text inputs return strings, so we safely convert it to a float."""
        if value.strip() == "":
            self.custom_rate = 0.0
        else:
            self.custom_rate = float(value)
    
def estimator_card() -> rx.Component:
    """An interactive matrix component showcasing real-time cost tracking capabilities."""
    return rx.vstack(
        rx.box(
            rx.vstack(
                rx.heading("Interactive Takeoff & Cost Estimator", size="5", weight="bold"),
                rx.text(
                    "A live demonstration of event-driven state manipulation. Adjust the project parameters "
                    "below to watch the calculation engine redistribute metrics instantly.",
                    size="2",
                    color_scheme="gray",
                ),
                rx.divider(),
                
                rx.vstack(
                    rx.text("Select Material Category:", weight="bold", size="2"),
                    rx.select(
                        ["Reinforced Concrete (m3)", "Structural Steel (Ton)", "Brickwork (m2)"], # <-- Fixed!
                        value=EstimatorState.selected_material,
                        on_change=EstimatorState.change_material,
                        width="100%",
                    ),
                    width="100%",
                    align_items="start",
                ),
                
                rx.vstack(
                    rx.hstack(
                        rx.text("Base Quantity:", weight="bold", size="2"),
                        rx.text(EstimatorState.quantity.to_string()),
                        justify="between",
                        width="100%",
                    ),
                    rx.slider(
                        value=[EstimatorState.quantity],
                        min=1,
                        max=1000,
                        on_change=EstimatorState.set_quantity,
                        width="100%",
                    ),
                    width="100%",
                ),

                rx.vstack(
                    rx.hstack(
                        rx.text("Waste Allowance (%):", weight="bold", size="2"),
                        rx.text(EstimatorState.waste_percent.to_string() + "%"),
                        justify="between",
                        width="100%",
                    ),
                    rx.slider(
                        value=[EstimatorState.waste_percent],
                        min=0,
                        max=25,
                        on_change=EstimatorState.set_waste_percent,
                        width="100%",
                    ),
                    width="100%",
                ),

                rx.vstack(
                    rx.text("Custom Unit Rate ($):", weight="bold", size="2"),
                    rx.input(
                        value=EstimatorState.custom_rate.to_string(),
                        on_change=EstimatorState.set_custom_rate,
                        type="number",
                        width="100%",
                    ),
                    width="100%",
                    align_items="start",
                ),
                
                rx.divider(),
                
                # Dynamic Output Dashboard
                rx.grid(
                    rx.vstack(
                        rx.text("Net Material Cost", size="1", color_scheme="gray"),
                        rx.text("$" + EstimatorState.net_cost.to_string(), size="4", weight="bold"),
                        align_items="start",
                    ),
                    rx.vstack(
                        rx.text("Waste Cost Allocation", size="1", color_scheme="gray"),
                        rx.text("$" + EstimatorState.waste_cost.to_string(), size="4", weight="bold", color_scheme="red"),
                        align_items="start",
                    ),
                    rx.vstack(
                        rx.text("Total Scheduled Cost", size="1", color_scheme="gray"),
                        rx.text("$" + EstimatorState.total_cost.to_string(), size="5", weight="bold", color_scheme="green"),
                        align_items="start",
                    ),
                    columns="3",
                    gap="4",
                    width="100%",
                    padding_top="2",
                ),
                
                spacing="4",
                align_items="start",
            ),
            padding="6",
            border="1px solid rgba(128,128,128,0.3)",
            border_radius="lg",
            width="100%",
            max_width="800px",
        ),
        width="100%",
        align="center",
        padding_y="4",
    )

# Define the State (handles any interactivity, theme changes, or backend counters)
class State(rx.State):
    pass

def hero_section() -> rx.Component:
    """The landing area highlighting your dual background."""
    return rx.vstack(
        rx.heading("Boris", size="9", weight="bold"),
        rx.text(
            "Bridging Quantity Surveying & Software Development",
            size="5",
            color_scheme="gray",
            weight="medium",
        ),
        rx.text(
            "Optimizing construction metrics and project coordination through custom automation frameworks.",
            size="3",
            max_width="600px",
            text_align="center",
        ),
        # --- Updated text block ---
        rx.text(
            "Senior Quantity Surveyor and project coordinator by day, software developer by night. "
            "I bridge the gap between traditional construction metrics and modern web automation. "
            "By combining deep domain expertise in cost control with Python, React, and Streamlit, "
            "I build custom digital tooling—like ProCalc—that transforms fragmented workflows into "
            "unified, scalable web applications.",
            size="3",
            max_width="650px",
            text_align="center",
        ),
        spacing="4",
        align="center",
        padding_y="8",
    )

def skills_section() -> rx.Component:
    """Categorized skills matrix showing domain expertise."""
    return rx.vstack(
        rx.heading("Skills Matrix", size="6", weight="bold"),
        rx.grid(
            # Quantity Surveying Column
            rx.vstack(
                rx.heading("Quantity Surveying", size="4", weight="bold"),
                rx.text("• Glodon (TAS/TRB)"),
                rx.text("• AutoCAD & Blueprint Analysis"),
                rx.text("• BOQ Development & Cost Control"),
                align_items="start",
                padding="4",
                border="1px solid rgba(128,128,128,0.2)",
                border_radius="md",
            ),
            # Software Tech Column
            rx.vstack(
                rx.heading("Software Development", size="4", weight="bold"),
                rx.text("• Python (Data Logic & Automation)"),
                rx.text("• React & Frontend UI"),
                rx.text("• Streamlit Framework"),
                align_items="start",
                padding="4",
                border="1px solid rgba(128,128,128,0.2)",
                border_radius="md",
            ),
            columns="2",
            spacing="4",
            width="100%",
            max_width="800px",
        ),
        spacing="4",
        width="100%",
        align="center",
        padding_y="6",
    )

def project_card() -> rx.Component:
    """Featured case study layout for ProCalc."""
    return rx.vstack(
        rx.heading("Featured Project", size="6", weight="bold"),
        rx.box(
            rx.vstack(
                rx.hstack(
                    rx.heading("ProCalc App", size="5", weight="bold"),
                    rx.badge("Python", color_scheme="blue"),
                    rx.badge("Streamlit", color_scheme="red"),
                    rx.badge("React", color_scheme="cyan"),
                    spacing="2",
                ),
                rx.text(
                    "A multi-sheet calculation web application built to convert manual, error-prone spreadsheet data into unified, automated BOQ metrics.",
                    size="3",
                ),
                rx.vstack(
                    rx.hstack(rx.text("Challenge:", weight="bold"), rx.text("Fragmented offline tracking caused manual bottlenecks.")),
                    rx.hstack(rx.text("Solution:", weight="bold"), rx.text("Architected custom backend logic to generate real-time metrics.")),
                    rx.hstack(rx.text("Impact:", weight="bold"), rx.text("Drastically reduced calculation timelines for engineering teams.")),
                    align_items="start",
                    spacing="2",
                ),
                spacing="3",
                align_items="start",
            ),
            padding="6",
            border="1px solid rgba(128,128,128,0.3)",
            border_radius="lg",
            width="100%",
            max_width="800px",
        ),
        spacing="4",
        width="100%",
        align="center",
        padding_y="6",
    )

def workflow_card() -> rx.Component:
    """Featured leadership case study for QS Workflow Standardization."""
    return rx.vstack(
        rx.box(
            rx.vstack(
                rx.hstack(
                    rx.heading("QS Workflow Standardization", size="5", weight="bold"),
                    rx.badge("Process Engineering", color_scheme="orange"),
                    rx.badge("Change Management", color_scheme="grass"),
                    rx.badge("Leadership", color_scheme="purple"),
                    spacing="2",
                ),
                rx.text(
                    "Coordinated a comprehensive overhaul of QS protocols to establish a single source of truth for all project documentation.",
                    size="3",
                ),
                rx.vstack(
                    rx.hstack(rx.text("Challenge:", weight="bold"), rx.text("Inconsistent formatting across teams caused operational friction during handoffs.")),
                    rx.hstack(rx.text("Action:", weight="bold"), rx.text("Developed unified templates and successfully rolled them out during the H1 2026 Townhall.")),
                    rx.hstack(rx.text("Impact:", weight="bold"), rx.text("Achieved a 20% reduction in inter-departmental data conflicts.")),
                    align_items="start",
                    spacing="2",
                ),
                spacing="3",
                align_items="start",
            ),
            padding="6",
            border="1px solid rgba(128,128,128,0.3)",
            border_radius="lg",
            width="100%",
            max_width="800px",
        ),
        spacing="4",
        width="100%",
        align="center",
        padding_bottom="6",
    )

def index() -> rx.Component:
    """The main single-page layout structure."""
    return rx.center(
        rx.vstack(
            rx.hstack(
                rx.spacer(),
                rx.color_mode.button(),
                width="100%",
                padding_top="4",
            ),
            hero_section(),
            rx.divider(),
            skills_section(),
            rx.divider(),
            rx.heading("Featured Work & Leadership", size="6", weight="bold"),
            project_card(),
            workflow_card(),
            rx.divider(),
            rx.heading("Live Tooling Prototype", size="6", weight="bold"),
            estimator_card(), # <-- Appends the working calculator interface
            spacing="6",
            width="100%",
            max_width="900px",
            padding="4",
        ),
        width="100%",
    )

# App initialization and page routing
app = rx.App()
app.add_page(index, title="Boris | Portfolio")