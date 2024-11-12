using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Reflection.Emit;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using static System.Windows.Forms.VisualStyles.VisualStyleElement;

namespace Зачёт
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }
        private void Form1_Load(object sender, EventArgs e)
        {
        }
        private void label1_Click_1(object sender, EventArgs e)
        {

        }

        private void pictureBox1_Click(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged_1(object sender, EventArgs e)
        {
            switch (comboBox1.SelectedIndex)
            {
                case 0:
                    pictureBox1.Image = Image.FromFile("C:\\Users\\Сергей\\Desktop\\ТК 24\\ВП\\Первое фото.jpg");
                    label1.Text = "Поздравление 1"; break;
                case 1:
                    pictureBox1.Image = Image.FromFile("C:\\Users\\Сергей\\Desktop\\ТК 24\\ВП\\Второе фото.jpg");
                    label1.Text = "Поздравление 2"; break;
                case 2:
                    pictureBox1.Image = Image.FromFile("C:\\Users\\Сергей\\Desktop\\ТК 24\\ВП\\Третье фото.jpg")
                ; label1.Text = "Поздравление 3"; break;
                case 3:
                    pictureBox1.Image = Image.FromFile("C:\\Users\\Сергей\\Desktop\\ТК 24\\ВП\\Четвёртое фото.jpg");
                    label1.Text = "Поздравление 4"; break;
                case 4:
                    pictureBox1.Image = Image.FromFile("C:\\Users\\Сергей\\Desktop\\ТК 24\\ВП\\Пятое фото.png");
                    label1.Text = "Поздравление 5"; break;
                case 5:
                    pictureBox1.Image = Image.FromFile("C:\\Users\\Сергей\\Desktop\\ТК 24\\ВП\\шестое фото.jpg");
                    label1.Text = "Поздравление 6"; break;
            }
        }
    }
}

