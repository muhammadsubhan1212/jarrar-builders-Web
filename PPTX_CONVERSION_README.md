# HTML to PowerPoint Conversion

This script converts the HTML presentation into a PowerPoint (PPTX) file.

## Requirements

Install the required Python packages:

```bash
pip install -r requirements.txt
```

Or install manually:
```bash
pip install python-pptx beautifulsoup4 lxml
```

## Usage

Run the conversion script:

```bash
python convert_to_pptx.py
```

This will create a file named `Cloud_Project_Presentation.pptx` in the current directory.

## Features

The script converts all slides from the HTML presentation, including:

- **Title Slide**: Centered title with subtitle and footer
- **Content Slides**: Title with bullet points
- **Two-Column Slides**: Text on one side, placeholder/image area on the other
- **Comparison Slides**: Two side-by-side cards with lists
- **Conclusion Slide**: Centered conclusion text

All slides maintain the dark theme colors:
- Background: Dark blue (#0f172a, #020617, #1e293b)
- Text: Light colors (#f1f5f9, #cbd5e1, #94a3b8)
- Accent: Cyan (#38bdf8)

## Slide Dimensions

The presentation uses a 16:9 aspect ratio:
- Width: 10 inches (960px)
- Height: 5.625 inches (540px)

## Notes

- Placeholder text for screenshots is preserved as text boxes with dashed borders
- All formatting, colors, and layout are maintained from the original HTML
- The presentation is ready to use - you can add actual screenshots by replacing the placeholder text boxes



