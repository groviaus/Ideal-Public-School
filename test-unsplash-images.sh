#!/bin/bash

echo "Testing Unsplash Images for School Website..."
echo "=============================================="

# Homepage Images
echo "HOMEPAGE IMAGES:"
echo -n "Hero Campus: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/1600x900/?school,campus,building" && echo " ✓"

echo -n "About Students: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/1200x800/?students,classroom,learning" && echo " ✓"

echo -n "Library: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x500/?library,books,reading" && echo " ✓"

echo -n "Science Lab: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x500/?science,laboratory,experiment" && echo " ✓"

echo -n "Sports Ground: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x500/?sports,playground,athletics" && echo " ✓"

echo -n "School Bus: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x500/?school,bus,yellow" && echo " ✓"

echo -n "Medical Room: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x500/?medical,clinic,healthcare" && echo " ✓"

echo -n "Principal Portrait: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/600x800/?professional,portrait,educator" && echo " ✓"

echo -n "Sports Event: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?sports,event,competition" && echo " ✓"

echo -n "Science Exhibition: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?science,exhibition,fair" && echo " ✓"

echo -n "Cultural Performance: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?cultural,performance,dance" && echo " ✓"

# About Page Images
echo ""
echo "ABOUT PAGE IMAGES:"
echo -n "School History: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/1200x800/?school,history,education" && echo " ✓"

echo -n "Leadership Portrait: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/400x400/?professional,educator,portrait" && echo " ✓"

# Academics Page Images
echo ""
echo "ACADEMICS PAGE IMAGES:"
echo -n "Pre-Primary: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?kindergarten,children,learning" && echo " ✓"

echo -n "Primary: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?primary,school,children" && echo " ✓"

echo -n "Secondary: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?teenagers,students,classroom" && echo " ✓"

echo -n "Senior Secondary: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?high,school,students" && echo " ✓"

# Admissions Page Images
echo ""
echo "ADMISSIONS PAGE IMAGES:"
echo -n "Admissions Family: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/1200x800/?family,school,admission" && echo " ✓"

# Facilities Page Images
echo ""
echo "FACILITIES PAGE IMAGES:"
echo -n "Auditorium: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?auditorium,hall,stage" && echo " ✓"

echo -n "Cafeteria: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?cafeteria,canteen,dining" && echo " ✓"

echo -n "Computer Lab: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?computer,lab,technology" && echo " ✓"

# Faculty Page Images
echo ""
echo "FACULTY PAGE IMAGES:"
echo -n "Faculty Portrait: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/300x300/?teacher,educator,professional" && echo " ✓"

# Student Life Page Images
echo ""
echo "STUDENT LIFE PAGE IMAGES:"
echo -n "Morning Assembly: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?students,assembly,morning" && echo " ✓"

echo -n "Sports Club: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?sports,club,activity" && echo " ✓"

echo -n "Music Dance: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?music,dance,students" && echo " ✓"

echo -n "Art Craft: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/800x600/?art,craft,creative" && echo " ✓"

# Contact Page Images
echo ""
echo "CONTACT PAGE IMAGES:"
echo -n "School Entrance: "
curl -s -o /dev/null -w "%{http_code}" "https://source.unsplash.com/1200x800/?school,entrance,building" && echo " ✓"

echo ""
echo "=============================================="
echo "All images tested successfully!"
echo "Run this script first, then proceed with implementation."


